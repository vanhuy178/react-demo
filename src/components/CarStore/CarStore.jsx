import React, { Component } from 'react'
import CarList from './CarList'
import ModalCar from './ModalCar'

export default class CarStore extends Component {
    state = {
        carItemState: { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 }
    }

    changeCarItemState = (dataReceived) => {
        this.setState({ carItemState: dataReceived })
    }
    render() {
        return (
            <div className='container'>
                <ModalCar dataFromCarStore={this.state.carItemState} />
                <CarList changeCarFromCarStore={this.changeCarItemState} />
            </div>
        )
    }
}
