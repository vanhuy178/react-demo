import React, { Component } from 'react'

export default class Product extends Component {

    render() {

        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.props.dataItem;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={hinhAnh} className="card-img-top" alt={tenSP} />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <p>Price: {giaBan}</p>
                    <a href="#" className="btn btn-primary" onClick={() => this.props.itemWasChoose(this.props.dataItem)}>Xem chi tiết</a>
                </div>
            </div>
        )
    }
}
