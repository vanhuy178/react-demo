import React, { Component } from 'react'

export default class CartItem extends Component {

    render() {
        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.props.dataProductCartItem;
        return (
            <div className="col-md-4">
                <div className="card" style={{ width: '13rem' }}>
                    <img src={hinhAnh} className="card-img-top" alt={`${tenSP}-${maSP}`} style={{ width: '100%' }} />
                    <div className="card-body">
                        <h5 className="card-title">{tenSP}</h5>
                        <p className="card-text" >Giá: {giaBan.toLocaleString()}</p>
                        <div className='card-text' style={{ fontSize: '13px' }}>Màn hình: {manHinh}, Camera trước: {cameraTruoc}, <br />
                            Camera sau: {cameraSau}, Ram: {ram}, Rom: {rom}
                        </div>
                        <a href="#" className="btn btn-primary mt-2" onClick={() => this.props.addCartItem(this.props.dataProductCartItem)}>Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}
