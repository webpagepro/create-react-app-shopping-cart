import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

class AddCartItem extends React.Component {

  state = {
    quantity: 0,
    product_id: 40,
  
  }

  handleChange = e => {
    let { name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const nItem = this.props.products.find(item => this.state.product_id === item.id)
   //const {name, priceInCents} = nItem
   console.log("nItem ", nItem)
   let newItem = {}
   newItem.id = 340;
   newItem.product = nItem;
   newItem.quantity = e.target
    this.props.addItemToCart(newItem);
  }
  

  render() {
     
    console.log("AddCartItem render: ", this.props.product.name)


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
            value={this.state.quantity}/></p>

          <Button style={{ margin: '10px' }}>Submit</Button>
        </form>
      </FormGroup>
    )
  }
}

export default AddCartItem