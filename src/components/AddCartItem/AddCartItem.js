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
    let len = (this.props.products).length;
    console.log("len ", len)

    e.preventDefault();
    const nItem = this.props.products.find(item => Number(this.state.product_id) === item.id)
   const {name, quantity} = nItem
   let newItem = {}
   newItem.id = len+1;
   newItem.product = nItem;
   newItem.quantity = this.state.quantity;
    this.props.addItemToCart(newItem);
    console.log("nItem ", nItem)

  }
  

  render() {
     
    console.log("AddCartItem render: ", this)


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
            name="quantity"
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