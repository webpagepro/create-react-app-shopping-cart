import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AddCartItem extends React.Component {
  products = [
    { id: "40", product: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: "41", product: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: "42", product: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: "43", product: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: "44", product: 'Practical Copper Plate', priceInCents: 1000 },
    { id: "45", product: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: "46", product: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: "47", product: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: "48", product: 'Awesome Leather Shoes', priceInCents: 3990 },
]
  state = {
    quantity: 0,
    product_id: 1
  }

  handleChange = e => {
    let {product, value } = e.target.value
    this.setState({
      [product]: value
    }) 
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItemToCart(this.state)
  }

  _onSelectChange = e => {
    this.props.updateSelectedProductId(e.target.value)
}
_onQuantityChange = e => {
    this.props.updateQuantity(e.target.value)
}
_onFormSubmit = e => {
    e.preventDefault();
    const fullItem = this.items.find(item => this.props.form.selectedProductId === item.id)
    const {name, priceInCents} = fullItem
    this.props.addItemToCart(name, priceInCents)
}

  render () {
    let optionTags = this.products.map(product => <option key={product.id} value={product.id}>{product.product}</option>)
    return (
      <FormGroup>
      <form onSubmit={this.handleSubmit}>
      <p>Product: <select type="text" 
                            onChange={this.handleChange}   product="product_id">{optionTags}</select></p>

        <p>Quantity: <input 
                          type="text" 
                          name="selectItem"
                          id="selectItem"
                          onChange={this.handleChange} product="quantity" 
                          value={this.props.quantity} /></p>
                          
       <Button style={{margin:'10px'}}>Submit</Button>
      </form>
      </FormGroup>
    )
  }
}

export default AddCartItem