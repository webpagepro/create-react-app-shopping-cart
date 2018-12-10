import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

const CartItems = props => {
    let listOfCartItems = props.cartItems.map(item => {
        item.product = props.products.find(product => product.id === item.product_id)
        return <CartItem key={item.id} item={item} />
      })
      let total = props.cartItems.reduce((acc, item) => {
        return acc + (item.product.priceInCents * item.quantity)
      }, 0)
      return (
        <div className="container">
          <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
              </div>
            </div>
            {listOfCartItems}
          </div>
          Total: ${(total/100).toFixed(2)}
        </div>
      )
    }
    
    export default CartItems