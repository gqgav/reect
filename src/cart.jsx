import React from 'react';
import './App.css'
import CartItem from './cartItem'

class Cart extends React.Component{
  render(){
    return(
      <div className="cart">
      <CartItem />
      <CartItem />
      </div>
    )
  }
}
// msakd

export default Cart;