import React, { Component } from 'react'
import DATA_PRODUCT from './data.json';
import Product from './Product';
import './style/listProduct.css'
export default class ListProduct extends Component {
    state = {
        detailProduct: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg"
        }
    }
    detailItem = (itemReceived) => {
        this.setState({ detailProduct: itemReceived })
    }
    renderEachItem = () => {
        return DATA_PRODUCT.map((item, index) => {
            return <div className="col-md-4" key={index}>
                <Product dataItem={item} itemWasChoose={this.detailItem} />
            </div>
        })
    }
    render() {
        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.state.detailProduct;

        return (
            <div className='container-fluid'>
                <h1 className="text-center">
                    DANH SÁCH SẢNH PHẨM
                </h1>
                <div className="row">
                    {this.renderEachItem()}
                </div>

                {/* sản phẩm chi tiết */}
                <div className="row">
                    <div className="col-4">
                        <h2>{this.state.detailProduct.tenSP}</h2>
                        <img src={this.state.detailProduct.hinhAnh}
                            alt={this.state.detailProduct.tenSP}
                            style={{ width: '100%' }} />

                    </div>
                    <div className="col-8">
                        <h2>THÔNG SỐ KỸ THUẬT</h2>

                        <div className="table" >
                            <tbody>
                                <tr className="">
                                    <td>Tên Sản Phẫm</td>
                                    <td>{tenSP}</td>
                                </tr>
                                <tr className="">
                                    <td>Màn hình</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr className="">
                                    <td>Hệ Điều Hành</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr className="">
                                    <td>Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr className="">
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr className="">
                                    <td>Ram</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr className="">
                                    <td>Rom</td>
                                    <td>{rom}</td>
                                </tr>
                                <tr className="">
                                    <td>Giá bán</td>
                                    <td>{giaBan.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
