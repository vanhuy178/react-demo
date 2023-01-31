import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className='row'>
                <div className="card " style={{ width: '16 rem' }}>
                    <img src={this.props.dataItem.image} className="card-img-top" alt={this.props.dataItem.name} />
                    <div className="card-body">
                        <h6 className="card-title">{this.props.dataItem.name.toUpperCase()}</h6>
                        <p className="card-text">{this.props.dataItem.shortDescription}</p>
                        <p className='card-text'>{this.props.dataItem.price}</p>
                        <a href="#" className="btn btn-primary mr-2">Buy</a>
                        <a href="#" className="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        )
    }
}
