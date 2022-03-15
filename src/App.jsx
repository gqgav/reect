import React from 'react';
import Cart from './cart';
import Navbar from './navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
     products:[
       {
         price:99,
         title:'watch',
         qty:1,
         img:'https://images.unsplash.com/photo-1587908628202-db1a9e56f1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         id:1
       },
       {
         price:200,
         title:'Mobile',
         qty:4,
         img:'https://images.unsplash.com/photo-1638913970895-d3df59be1466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
         id:2,
       },
       {
         price:12,
         title:'Laptop',
         qty:3,
         img:'https://images.unsplash.com/photo-1647264002303-9c40ca31b62e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

  getCartCount = ()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }
  getCardTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal = cartTotal + (product.qty * product
        .price)
    })
    return cartTotal
  }
  render(){
    const {products} = this.state;
  return (
    <main>
      <Navbar count = {this.getCartCount()} />
      <Cart  
      products = {products}
       onIncreaseQuantity = {this.handleIncrease} onDecrease = {this.handleDecrease}
       deleteItem = {this.DeleteProduct}
       ></Cart>
       <div>Total: {this.getCardTotal()}</div>
    </main>
  );
  }
}

export default App;