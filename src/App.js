import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer'
import CartHeader  from './components/CartHeader/CartHeader'  
import CartItems from './components/CartItems/CartItems'
import AddCartItem from './components/AddCartItem/AddCartItem'

class App extends Component{
  state = {
    choice: [],
     cartItemsList :  [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    quantity: 0
}
render() {
 

  return (
    <div className="App">
       <CartHeader/>
       
      <CartItems cartItemsList={this.state.cartItemsList} products={this.state.products} />

       
            <AddCartItem addItemToCartFunc={this.addItemToCart} products={this.state.products}/>
      
        
      <Footer copy = "2018"/>
    </div>
  );
}
}


export default App;
