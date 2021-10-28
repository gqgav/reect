import React from 'react';
import './App.css';

const cartItem = (props) => {
 
  //  increasingQty = () => {
  //   console.log('this',this.state)
  //   //SetState form 1
  //   // this.setState({
  //   //   //This is known as shallow mergin means take a single value and update it on the state value
  //   //   qty:this.state.qty + 1,
    
  //   // })

  //   //Form 2
  //     //If prev state required 
  //   this.setState((prevState)=>{
  //     return {qty:prevState.qty + 1,}
  //   })
  // }
  // decreasingQty = () => {
  //   const {qty} = this.state;
  //   if(qty === 0){
  //     return;
  //   }
    
  //   this.setState((prevState)=>{
       
        
  //         return{
  //                        qty:prevState.qty - 1,
  //         }
        
  //   })
  // }
    console.log(props)
       const {price,title,qty} = props.product;
    
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
          <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1635405079~hmac=5f7d56d043f0d7651b3721e158990451" onClick={()=>{props.Increasethis(props.product)}}/>
          <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1635405102~hmac=3c32ef2c8bdafb4fe7fcfa9f4f892323" 
          
           onClick={()=>{props.decreseTheTick(props.product)}} />
          <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4442/premium/4442016.png?token=exp=1635405130~hmac=a17b94d0b8b383a7054df991ea70a0bc" onClick={()=>{props.deleteIt(props.product.id)}}/>

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

export default cartItem;