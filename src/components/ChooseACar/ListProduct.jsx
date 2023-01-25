import React, { Component } from 'react'
import { LIST_PRODUCT } from './../../asset/constant';
export default class ListProduct extends Component {
    renderProduct = () => {
        let htmlContent = '';
        htmlContent = LIST_PRODUCT.map((item, index) => {
            const { id, name, price, color } = item;
            const image = require(`./../../asset/images/products/${color}-car.jpg`)
            return (
                <tr data-id={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <img style={{ width: "100px" }} src={image} alt={name} />
                    </td>
                </tr>
            )
        })
        return htmlContent
    }
    render() {
        return (
            <table className="table">
                <thead className=''>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {/*render list product here  */}
                    {this.renderProduct()}
                </tbody>
            </table>

        )
    }
}
