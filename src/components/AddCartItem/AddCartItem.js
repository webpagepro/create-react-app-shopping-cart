import React, { Component } from 'react'

class AddCartItem extends Component {

  handleChange = e => {
    let { name, value } = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItemToCartFunc(this.props.state)
  }

  render () {
    let optionTags = this.props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Quantity: <input type="text" onChange={this.handleChange} name="quantity" value={this.state.quantity} /></p>
        <p>Product: <select type="text" onChange={this.handleChange} name="product_id">{optionTags}</select></p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddCartItem