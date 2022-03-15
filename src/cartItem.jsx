import React from 'react';
import './App.css';

class cartItem extends React.Component{
 
   increasingQty = () => {
    console.log('this',this.state)
    //SetState form 1
    // this.setState({
    //   //This is known as shallow mergin means take a single value and update it on the state value
    //   qty:this.state.qty + 1,
    
    // })

    //Form 2
      //If prev state required 
    this.setState((prevState)=>{
      return {qty:prevState.qty + 1,}
    })
  }
  decreasingQty = () => {
    const {qty} = this.state;
    if(qty === 0){
      return;
    }
    
    this.setState((prevState)=>{
       
        
          return{
                         qty:prevState.qty - 1,
          }
        
    })
  }
  render(){
    const {price,title,qty} = this.props.product;
    const {product,onDecrease,onIncreaseQuantity,deleteItem} = this.props;
    
    return(

      <div className="cart-item">
        <div className="left-block">
          <img style={styles.images}/>
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
}

const styles = {
  images:{
    height:110,
    width:110,
    borderRadius:4
  }
}

export default cartItem;