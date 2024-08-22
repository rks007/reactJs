 import { configureStore} from "@reduxjs/toolkit"
 import cartReducer from "./Cartslice"
 import productReducer from "./ProductSlice"

 export const store = configureStore({
    reducer: {
        cart: cartReducer, //this is cart reducer
        product: productReducer
    }
 })