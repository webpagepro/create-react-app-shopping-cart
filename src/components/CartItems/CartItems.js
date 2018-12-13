import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

const CartItems = ({products}) => {
    let cartItems = products.map(item => {
        return <CartItem key={item.id} item={item} />
      })
      console.log(cartItems);
      
      return (
        <div className="container">
          <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8">Product / Item</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
              </div>
            </div>
            {cartItems}
          </div>
         {/*} Total: ${(total/100).toFixed(2)} */}
        </div>
      )
    }
    
    export default CartItems