import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItems = (props) => {
 console.log("CartItems: ", props)

    let cartItems = props.items.map(item => {
       
        return <CartItem key={item.id} item={item} />
      })

      let total = cartItems.reduce((acc, item) => {
        console.log("product cartitems:", item)
        return acc + (item.priceInCents * item.quantity)
      }, 0)

      return (
        <div className="container">
          <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8"><b>Product</b></div>
                <div className="col-md-2"><b>Price</b></div>
                <div className="col-md-2"><b>Quantity</b></div>
              </div>
            </div>
            {cartItems}
          </div>
         Total: ${(total/100).toFixed(2)} 
        </div>
      )
    }
    
    export default CartItems