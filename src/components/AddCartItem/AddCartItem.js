import React from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

class AddCartItem extends React.Component {

  state = {
    quantity: 1,
    product_id: 40,
  
  }

  handleChange = e => {/**/
    let { name, value} = e.target 
    this.setState({
      [name]: value
    })
   
   console.log("this ", this)

  }

  handleSubmit = e => {
    e.preventDefault();
    const nItem = this.props.items.find(item => this.state.product_id === item.id)
   const {name, priceInCents} = nItem
   console.log("nItem ", nItem)
   let newItem = {}
   newItem.id = 1;
   newItem.product = nItem;
   newItem.quantity = this.state.quantity87
    this.props.addItemToCart(newItem);
  }
  

  render() {
     
    console.log("AddCartItem render: ", this)


    let optionTags = this.props.items.map(product => {
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