import React from 'react'

class AddCartItem extends React.Component {
  products = [
    { id: "40", name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: "41", name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: "42", name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: "43", name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: "44", name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: "45", name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: "46", name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: "47", name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: "48", name: 'Awesome Leather Shoes', priceInCents: 3990 },
]
  state = {
    quantity: 0,
    product_id: 1
  }

  handleChange = e => {
    let {name, value } = e.target.value
    this.setState({
      [name]: value
    }) 
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItemToCartFunc(this.props.state)
  }

  render () {
    let optionTags = this.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Quantity: <input type="text" onChange={this.handleChange} name="quantity" value={this.state.quantity} /></p>
        <p>Product: <select type="text" onChange={this.handleChange} name="product_id">{optionTags}</select></p>
        <button type="submit" style={{margin:'10px'}}>Submit</button>
      </form>
    )
  }
}

export default AddCartItem