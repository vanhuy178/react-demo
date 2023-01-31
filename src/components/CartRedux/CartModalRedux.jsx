import React, { Component } from 'react'
import { connect } from 'react-redux'
class CartModalRedux extends Component {
    renderDetailCartItem = () => {

        return this.props.cart.map((item, index) => {
            const { idCartItem, nameCartItem, pictureCartItem, amount, price } = item
            return (
                <tr>
                    <td>{idCartItem}</td>
                    <td>{nameCartItem}</td>
                    <td><img src={pictureCartItem} style={{ width: '90px' }} alt={nameCartItem} /></td>
                    <td>
                        <button className='btn btn-success'
                            onClick={() => this.props.increaseOrDecrease(idCartItem, 1)}>+</button>
                        {amount}
                        <button className='btn btn-danger'
                            onClick={() => this.props.increaseOrDecrease(idCartItem, -1)}>-</button>
                    </td>
                    <td>
                        {price.toLocaleString()}
                    </td>
                    <td>{(amount * price).toLocaleString()}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => {
                            this.props.deleteCartItem(idCartItem)
                        }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" style={{ maxWidth: '1000px' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        </tr>
                                        <th>Mã SP</th>
                                        <th>Tên SP</th>
                                        <th>Hình ảnh</th>
                                        <th>Số Lượng</th>
                                        <th>Giá bán</th>
                                        <th>Thành tiền</th>
                                    </thead>

                                    <tbody>
                                        {this.renderDetailCartItem()}
                                    </tbody>

                                    <tfoot>
                                        <td colSpan={4}></td>
                                        <td>Tổng tiền</td>
                                        <td>
                                            {this.props.cart.reduce((total, item) => total += (item.amount * item.price), 0)}
                                        </td>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

// export default CartModalRedux; 
const mapStateToProps = state => {  //state là state ở rootreducer
    return { cart: state.cartReducerStore.cart } //chấm phát tới rootreducer chấm cái nửa tới cart reducer
}
const mapDispatchToProps = dispatch => {
    return {
        deleteCartItem: (idCartItem) => {
            // tạo action
            let deleteCartAction = {
                type: 'DELETE_CART_ITEM',
                payload: idCartItem
            }
            // dùng phương thức dispatth cung cấp để để đẩy action lên reducer
            dispatch(deleteCartAction)
        },

        increaseOrDecrease: (idCartItem, status) => { // status true thì xử lý tăng, false xử lý giảm
            let increaseOrDecrease = {
                type: 'INCREASE_OR_DECREASE',
                payload: { idCartItem, status }
            }

            dispatch(increaseOrDecrease)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux)
