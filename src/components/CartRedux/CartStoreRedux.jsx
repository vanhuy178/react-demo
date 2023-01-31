import React, { Component } from 'react'
import CartModalRedux from './CartModalRedux'
import ListCartRedux from './ListCartRedux'
import { connect } from 'react-redux';

class CartStoreRedux extends Component {
    // hàm tính tổng số lượng
    renderTotalAmount = () => {
        console.log(this.props.cart);
        return this.props.cart.reduce((total, product) => {
            return total += product.amount
        }, 0)
    }
    render() {
        return (
            <div className='container'>
                <div className="text-right my-3" data-toggle="modal" data-target="#exampleModal">
                    <span>GIỎ HÀNG </span><i class="fa fa-cart-shopping" style={{ fontSize: '24px' }}></i><span style={{ fontSize: '13px' }}>({this.renderTotalAmount()})</span>
                </div>
                <CartModalRedux />
                <p className='text-center text-uppercase my-4 font-weight-bold' style={{ fontSize: '20px' }}>Danh sách sản phẩm</p>
                <ListCartRedux />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { cart: state.cartReducerStore.cart }
}
export default connect(mapStateToProps)(CartStoreRedux);