import React from 'react';
import './App.css'
import CartItem from './cartItem'

const Cart = (props) => {
 

    const {products} = props;
    return(
      <div className="cart">

        {
          products.map((product)=>{
            return <CartItem product ={product} key={product.id} onIncreaseQuantity = {props.onIncreaseQuantity} onDecrease = {props.onDecrease}
            deleteItem = {props.deleteItem} />
          })
        }

      </div>
    )
  
}


export default Cart;