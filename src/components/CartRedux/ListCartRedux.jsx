import React, { Component } from 'react'
import CartItemRedux from './CartItemRedux'
import { LIST_PRODUCT_CART } from '../../asset/constant'
export default class ListCartRedux extends Component {
    renderProductCartItem = () => {
        return LIST_PRODUCT_CART.map((item, index) => {
            return <CartItemRedux dataItem={item} key={index} />
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderProductCartItem()}
            </div>
        )
    }
}
