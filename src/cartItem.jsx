import React from 'react';
import './App.css';

const CartItem = (props)=> {
 

  
    const {price,title,qty,img} =props.product;
    const {product,onDecrease,onIncreaseQuantity,deleteItem} = props;
    
    return(

      <div className="cart-item">
        <div className="left-block">
          <img style={styles.images} src={img}/>
        </div>
        <div className="right-block">
        <div>{title}</div>
        <div>Rs {price}</div>
        <div>Qty:{qty}</div>
        <div className="cart-item-actions">
          <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1647320898~hmac=d723cd642d564e48f814133b9da639b7" onClick={()=>{onIncreaseQuantity(product)}}/>
          <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1647321804~hmac=e21d8e39aa5a1c5f92aba091c1eb6745" onClick={()=>{onDecrease(product)}} />
          <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png" onClick={()=>{deleteItem(product.id)}}/>

        </div>
        </div>
      </div>
    )
  
}

const styles = {
  images:{
    height:110,
    width:110,
    borderRadius:4
  }
}

export default CartItem;