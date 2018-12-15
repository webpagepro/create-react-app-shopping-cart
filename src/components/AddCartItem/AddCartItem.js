import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

class AddCartItem extends React.Component {

  state = {
    quantity: 1,
    product_id: 40,
  
  }

  handleChange = e => {
    let { name, value} = e.target
    console.log("handleChange.", `name: ${name}`, `value: ${value}`)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.product.addItemToCart(this.state)
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


  render() {
     console.log("addCartItem: ", this)
     console.log("Add ", this.props)


    let optionTags = this.props.addItemToCart.map(product => <option key={product.id} value={this.props.addItemToCart}>{product.name}</option>)
    return (
      <FormGroup>
        <form onSubmit={this.handleSubmit}>
          <p style={{ margin: '20px' }}>Product: <select type="text"
            onChange={this.handleChange} name="product_id">{optionTags}</select></p>

          <p>Quantity: <input
            type="text"
            name="quantity"
            id="selectItem"
            onChange={this.handleChange}
            value={this.props.quantity,
            this.props.price}/></p>

          <Button style={{ margin: '10px' }}>Submit</Button>
        </form>
      </FormGroup>
    )
  }
}

export default AddCartItem