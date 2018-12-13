import React, { Component } from 'react'


const CartItem = ({item}) => {
  console.log(item)
    return (

      <div className="list-group-item">
      <div className="row">
          <div className="col-md-8">{item.name}</div>
          <div className="col-md-2">{item.priceInCents}</div>
          <div className="col-md-2">{item.quantity}</div>
         
        </div> 
        
      </div>
  )
}


export default CartItem
