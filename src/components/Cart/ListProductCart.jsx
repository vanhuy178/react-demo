import React, { Component } from 'react'
import { LIST_PRODUCT_CART } from './../../asset/constant'
import CartItem from './CartItem'
export default class ListProductCart extends Component {

  renderListProductCart = () => {
    console.log(this.props.listDataCArtFromDefaultState);
    return LIST_PRODUCT_CART.map((item, index) => {
      return <CartItem dataProductCartItem={item} key={index}
        addCartItem={this.props.addCartItem}
        increaseOrDecrease={this.props.increaseOrDecrease}
      />
    })
  }

  render() {
    return (
      <>
        <h1 className='text-center my-5'>Danh sách sản phẩm</h1>
        <div className="row">
          {this.renderListProductCart()}
        </div>
      </>
    )
  }
}
