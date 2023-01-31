import React, { Component } from 'react'

export default class CarItem extends Component {
    render() {
        const { id, name, img, price } = this.props.dataItemWasPassed;
        const nameUpper = name.toLocaleUpperCase();
        const changeCar = this.props.changeCarFromCarList;
        return (
            <div className="col-md-3">
                <div className="card" style={{ width: '14rem' }}>
                    <img src={img} name className="card-img-top" alt={`${id}-${name}`} />
                    <div className="card-body">
                        <h5 className="card-title">{nameUpper}</h5>
                        <p className="card-text">Giá: {price.toLocaleString()}</p>
                        <a href="#"
                            className="btn btn-primary"
                            data-toggle="modal" data-target={`#exampleModal-${id}`}

                            onClick={() => changeCar(this.props.dataItemWasPassed)}
                        >Xem chi tiết</a>
                    </div>
                </div>
            </div>

        )
    }
}
