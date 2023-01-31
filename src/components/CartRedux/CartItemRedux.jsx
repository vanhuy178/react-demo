import React, { Component } from 'react'
import { connect } from 'react-redux';
class CartItemRedux extends Component {
    render() {
        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.props.dataItem;
        return (
            <div className="col-md-4">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={hinhAnh} className="card-img-top" alt={`${maSP}-${tenSP}`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{tenSP}</h5>
                        <p className="card-text">Giá: {giaBan.toLocaleString()}</p>
                        <a href="#" className="btn btn-success"
                            onClick={() => {
                                this.props.addCartItem(this.props.dataItem)
                            }}
                        >Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}

//         const { idCartItem, nameCartItem, pictureCartItem, amount, price } = this.props.cart

const mapDispatchToProps = (dispatch) => {
    return {
        addCartItem: (product) => {
            let setupProduct = {
                idCartItem: product.maSP,
                nameCartItem: product.tenSP,
                pictureCartItem: product.hinhAnh,
                amount: 1,
                price: product.giaBan
            }

            const addCartItemAction = {
                type: 'ADD_CART_ITEM',
                payload: setupProduct
            }

            // dùng dispath function để gửi dữ liệu lên reducer
            dispatch(addCartItemAction);
        }


    }
}

export default connect(null, mapDispatchToProps)(CartItemRedux);


// const sv = { ma: 1 }
// sv.ma = 2

// console.log(sv);