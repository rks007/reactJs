import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/Cartslice';

function Cart() {

    const cartItems = useSelector((state) => state.cart);//state.cart, cart word is coming from the store where we have named it cart
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(remove(id))
    }

  return (
    <div>
        <h3>cart page</h3>
        <div className='cartWrapper'>
        {cartItems.map((item) => (
            <div className='cartCard'>
                <img src={item.image} alt="item image" />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button onClick={() => handleRemove(item.id)} className='btn'>Remove</button>
            </div>
            
        ))}
    </div>
    </div>
  )
}

export default Cart