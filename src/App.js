import React, { Component } from 'react';
import './App.css';
import CartHeader  from './components/CartHeader/CartHeader'  
import Footer from './components/Footer/Footer'
import CartItems from './components/CartItems/CartItems'
{/*import AddCartItem from './components/AddCartItem';*/}
class App extends Component{
  state = {
    products: [],
    cartItems: []
}

render() {
  return (
    <div className="App">
      <CartHeader />
      {/*<AddCartItem addItemToCartFunc={this.addItemToCart} products={this.state.products}/>*/}
      <CartItems cartItems={this.state.cartItems} products={this.state.products} />
      <Footer copy = "2018"/>
    </div>
  );
}
}


export default App;
