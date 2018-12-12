import React, { Component } from 'react'


const CartItemsList = ({cartItemsList}) => {
    let cartItemsListComponent = cartItemsList.map(product => {
        return <CartItem key={product.id} product={product} />
      })
    }
    
    return (<CartItem key={product.id} item={product} />)
    

export default CartItemsList