import React from 'react';
import './App.css'
import CartItem from './cartItem'

class Cart extends React.Component{
  constructor(){
    super();
    this.state = {
     products:[
       {
         price:99,
         title:'watch',
         qty:1,
         img:'',
         id:1
       },
       {
         price:200,
         title:'Mobile',
         qty:34,
         img:'',
         id:2,
       },
       {
         price:2400,
         title:'Laptop',
         qty:311,
         img:'',
         id:3
       }
     ]
    }
  
  }
  handleIncrease = (product)=>{
    const {products} = this.state;
    //I need to find out an index of this
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products:products,
    })
  }

 
  handleDecrease = (product)=>{
    const {products}=  this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      return;
     
    }
    products[index].qty -= 1;
    this.setState({
      products,
    })
  }

  DeleteProduct = (id)=>{
    const {products} = this.state;
    const items = products.filter((item)=>item.id !== id);
    this.setState({
      products:items
    })
  }
  render(){
    const {products} = this.state;
    return(
      <div className="cart">

        {
          products.map((product)=>{
            return <CartItem product ={product} key={product.id} onIncreaseQuantity = {this.handleIncrease} onDecrease = {this.handleDecrease}
            deleteItem = {this.DeleteProduct} />
          })
        }

      </div>
    )
  }
}


export default Cart;