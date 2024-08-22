//here we are creating api handling with redux

import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze(
    {
        SUCCESS: 'success',
        ERROR: 'error',
        LOADING: 'loading'
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.SUCCESS
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


//middleware for api handling using thunk
export function fetchProducts(){

    return async function fetchProductThunk( dispatch ){ //use get dispatch function with it

        dispatch(setStatus(STATUS.LOADING));

        try {

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();

            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.SUCCESS))

        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}