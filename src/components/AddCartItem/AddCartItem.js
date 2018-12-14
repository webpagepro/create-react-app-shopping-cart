import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AddCartItem extends React.Component {


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
    e.preventDefault();
    this.props.addItemToCart(this.state)
  }
/*
  _onSelectChange = e => {
    this.props.updateSelectedProductId(e.target.value)
}
_onQuantityChange = e => {
    this.props.updateQuantity(e.target.value)
}
_onFormSubmit = e => {
    e.preventDefault();
    const nItem = this.items.find(item => this.props.form.selectedProductId === item.id)
    const {name, priceInCents} = nItem
    this.props.addItemToCart(name, priceInCents)
}
*/
  render () {
console.log("addCartItem: ", this)


    let optionTags = this.props.products.map(product => <option key={product.id} value={this.props.product}>{product.name}</option>)
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