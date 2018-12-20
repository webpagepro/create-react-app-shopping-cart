import React from 'react'


const CartItem = (props) => {
  console.log("CartItem item: ", props)
    return (

      <div className="list-group-item">
      <div className="row">
          <div className="col-md-8">{props.item.product.name}</div>
          <div className="col-md-2">{props.item.product.priceInCents}</div>
          <div className="col-md-2">{props.item.quantity}</div>
         
        </div> 
        
      </div>
  )
}


export default CartItem
