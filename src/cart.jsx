import React from 'react';
import './App.css'
import CartItem from './cartItem'

class Cart extends React.Component{
   constructor(){
    super();
    this.state = {
      products:[
        {
      title:'Mobile',
      price:23,
      img:'',
      qty:3,
      id:13
    },
    {
      title:'Watch',
      price:53,
      img:'',
      qty:12,
      id:14,
    },
    {
      title:'Laptop',
      price:44,
      img:'',
      qty:16,
      id:16
    }
      ]
  }
   }
   handleIncreaseRequest = (product) => {
     const { products } = this.state;
      const index = products.indexOf(product);
  products[index].qty += 1;
    this.setState({
      products
    })
   }

    decreasingtheTick = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty == 0){
        return;
      }
      products[index].qty -= 1;
      this.setState({
        products:products
      })
    }

    //Deleting the item

    deletingTheItem = (id) => {
        const { products} = this.state;
        const items = products.filter((item)=>item.id !== id);

  this.setState({
    products:items
  })
    }
  render(){
    const {products} = this.state
    return (
      <div className="cart">
      {products.map((product)=>{
        return <CartItem product={product} key={product.id}  Increasethis = {this.handleIncreaseRequest} decreseTheTick = {this.decreasingtheTick} deleteIt = {this.deletingTheItem}/>
      })}
      </div>
    )
    }
   
}
// msakd

export default Cart;