import React, { Component } from 'react'
import { LIST_CAR_STORE } from '../../asset/constant'
import CarItem from './CarItem'
export default class CarList extends Component {
    renderCarItem = () => {
        return LIST_CAR_STORE.map((item, index) => {

            return (
                <CarItem dataItemWasPassed={item} changeCarFromCarList={this.props.changeCarFromCarStore} />
            )
        })
    }
    render() {
        console.log('from car list');
        console.log(this.props);
        return (
            <div>
                <h1 className='text-center py-5'>Danh sách xe hơi</h1>
                <div className="row">
                    {this.renderCarItem()}
                </div>
            </div>
        )
    }
}
