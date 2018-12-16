import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

class AddCartItem extends React.Component {

  state = {
    quantity: 1,
    product_id: 40,
  
  }

  handleChange = e => {
    let { name, value} = e.target.value
    console.log("handleChange.", `name: ${name}`, `value: ${value}`)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const nItem = this.props.find(item => this.props.addItem.selectedProductId === item.id)
    const {name, priceInCents} = nItem
    this.props.addItemToCart(name, priceInCents)
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
     
    console.log("AddCartItem render: ", this.props.products)


    let optionTags = this.props.products.map(product => {
    return(
              <option key={product.id} value={product.id}>{product.name}</option>


          )

    })
          return (
      <FormGroup>
        <form onSubmit={this.handleSubmit}>
          <p style={{ margin: '20px' }}>Product: <select type="text"
            onChange={this.handleChange} name="product_id">{optionTags}</select></p>

          <p>Quantity: <input
            type="text"
            name="product_id"
            id="selectItem"
            onChange={this.handleChange}
            value={this.props.quantity}/></p>

          <Button style={{ margin: '10px' }}>Submit</Button>
        </form>
      </FormGroup>
    )
  }
}

export default AddCartItem