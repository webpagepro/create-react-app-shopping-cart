import React, { Component } from 'react';
import './App.css';
import { Container, FormGroup } from 'reactstrap'
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
                          { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
    ],
    quantity: "1", 
    products: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
], 
form: {
  quantity: 1,
  selectedProductId: "40"
}
  }

  addItemToCart = (name, priceInCents) => {
    this.setState({cartItems: [this.setState.cartItems, {
          id: this.state.form.selectedProductId,
          name,
          priceInCents,
          quantity: this.state.form.quantity
        }]
      }
    )
}

updateQuantity = newQuantity => {
  this.setState(prevState => {
    return {
      form: {
        ...prevState.form,
        quantity: newQuantity,
      }
    }
  })
}

updateSelectedProductId = nItem => {
  this.setState(prevState => {
    return {
      form: {
        ...prevState.form,
        selectedProductId: nItem
      }
    }
  })

}

render() {
 

  return (
    <div className="App">

    <Container>
     <FormGroup>
       <CartHeader/>
       
      <CartItems cartItemsList={this.state.products} products={this.state.products} />
      <AddCartItem addItemToCart={this.addItemToCart} products={this.state.addItemToCart}/>
      
       </FormGroup> 
      <Footer copy = "2018"/>
  
  
        </Container>
  </div>
  );
}
}



export default App;
