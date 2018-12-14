import React, { Component } from 'react'


const CartItem = ({data}) => {
  console.log("data: ", data)
    return (

      <div className="list-group-item">
      <div className="row">
          <div className="col-md-8">{data.name}</div>
          <div className="col-md-2">{data.priceInCents}</div>
          <div className="col-md-2">{data.quantity}</div>
         
        </div> 
        
      </div>
  )
}


export default CartItem
