import React, { Component } from 'react'

export default class Cart extends Component {
    renderCartItemModal = () => {
        return this.props.listDataCArtFromDefaultState.map((item, index) => {
            const { maSP, tenSP, soluong, giaBan, hinhAnh } = item

            return (
                <tr key={index}>
                    <td>{maSP}</td>
                    <td>{tenSP}</td>
                    <td><img src={hinhAnh} alt={tenSP} style={{ width: '50px' }} /></td>
                    <td>
                        <a href="#" className="btn btn-primary" onClick={() => this.props.increaseOrDecrease(maSP, 1)}>+</a>
                        {soluong}
                        <a href="#" className="btn btn-primary" onClick={() => this.props.increaseOrDecrease(maSP, -1)}>-</a>
                    </td>
                    <td>{giaBan.toLocaleString()}</td>
                    <td>{(soluong * giaBan).toLocaleString()}</td>

                    <td><button
                        onClick={() => this.props.deleteCartItem(maSP)}
                        className="btn btn-danger">Xóa</button></td>
                </tr>
            )

        })
    }
    totalMoney = () => {
        let { listDataCArtFromDefaultState } = this.props
        return listDataCArtFromDefaultState.reduce((totalMoney, cart) => {
            return totalMoney += cart.soluong * cart.giaBan;
        }, 0).toLocaleString()
    }
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "1000px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
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

                                {/* dùng hàm duyệt mảng ahihi */}
                                <tbody>
                                    {this.renderCartItemModal()}
                                </tbody>
                                <tfoot>
                                    <td colSpan="5"></td>
                                    <td>Tổng tiền:</td>
                                    <td>{this.totalMoney()}</td>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
