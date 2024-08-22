import React, { useEffect, useState } from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUS } from '../Redux/ProductSlice';

function Home() {

    const dispatch = useDispatch();

    //useSelector have all the states in it, choose whatever state you want to use just by calling it by its correct name mentioned in the store
    const {data:products, status} = useSelector((state) => state.product) //data: products means calling the data as products

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if(status === STATUS.LOADING){
        return <div style={{textAlign:"center", marginTop:"250px"}}>
            loading....
        </div>
    }

  return (
    <div className='productsWrapper'>
        {
            //dont get confuse with the name of products, it is renamed above as products from data
            products.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="image" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home