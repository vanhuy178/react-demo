import React, { Component } from 'react'
import Cart from './Cart'
import ListProductCart from './ListProductCart'

export default class CartStore extends Component {
    state = {
        cart: [
            // theo đối tượng bên dưới để dể dàng hình dung
            // { maSP: '', hinhAnh: '', tenSP: '', soluong: '', giaBan: '' }
        ]
    }

    // thêm item vào giỏ hàng   
    addCartItem = (cartItemObject) => {

        // lấy đối tượng cũ chuyển hóa thành đối tượng mới
        const newCartItem = {
            maSP: cartItemObject.maSP,
            hinhAnh: cartItemObject.hinhAnh,
            tenSP: cartItemObject.tenSP,
            soluong: 1,
            giaBan: cartItemObject.giaBan
        }
        // tìm xem sản phẩm có trong giỏ hàng hay chưa
        // giống sẽ trả về index còn lại trả về -1
        let indexFindIdProduct = this.state.cart.findIndex(itemInCart => itemInCart.maSP === newCartItem.maSP);

        if (indexFindIdProduct !== -1) {
            this.state.cart[indexFindIdProduct].soluong += 1;
        }
        else {
            this.state.cart.push(newCartItem);
        }
        // dùng spread operator sao chép giỏ hàng cũ 
        let updateCartItem = [...this.state.cart];

        // cập nhật 
        this.setState({ cart: updateCartItem });
    }

    deleteCartItem = (idCartItem) => {
        // xóa sản phẩm
        console.log(idCartItem);
        let indexFindIdProduct = this.state.cart.findIndex(itemInCart => itemInCart.maSP === idCartItem);
        if (indexFindIdProduct !== -1) {
            this.state.cart.splice(indexFindIdProduct, 1);
        }
        // dùng spread operator sao chép giỏ hàng cũ 
        let updateCartItem = [...this.state.cart];
        // cập nhật 
        this.setState({ cart: updateCartItem });

    }

    totalAmount = () => {
        return this.state.cart.reduce((totalAmount, cartItem) => {
            return totalAmount += cartItem.soluong;
        }, 0)
    }

    // dựa vào value là -1 hoặc 1 để giảm số lượng
    increaseOrDecrease = (maSP, value) => {
        let cart = [...this.state.cart];
        let index = cart.findIndex(item => item.maSP === maSP)
        if (index !== -1) {
            if (cart[index].soluong < 1 && value === -1) {
                return 0;
            }
            else {
                cart[index].soluong += value;
            }
        }

        this.setState({ cart: cart });
    }


    render() {
        const { cart } = this.state;
        return (
            <div className='container'>
                {/* tạo icon giỏ hàng */}
                <div className="text-right my-3" data-toggle="modal" data-target="#exampleModal">
                    <span>GIỎ HÀNG </span><i class="fa fa-cart-shopping" style={{ fontSize: '24px' }}></i><span style={{ fontSize: '13px' }}>({this.totalAmount() || 0})</span>
                </div>
                {/* Cart modal */}
                <Cart listDataCArtFromDefaultState={cart} deleteCartItem={this.deleteCartItem} increaseOrDecrease={this.increaseOrDecrease} />

                {/* list cart */}
                <ListProductCart addCartItem={this.addCartItem} listDataCArtFromDefaultState={cart} />
            </div>
        )
    }
}
