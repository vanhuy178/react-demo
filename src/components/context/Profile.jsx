import React, { Component } from 'react'
import ButtonProfile from './ButtonProfile'

export default class Profile extends Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://cdn-images-1.medium.com/max/1200/1*Ukhx76VQ8E6JXEW7xfIzSA.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Type Script</h5>
                    <p className="cart-text">From Microsoft</p>
                    <p className="card-text">
                        <i className="fa fa-heart" style={{ color: 'red' }}></i>
                        <span style={{ fontSize: '13px' }} className='mr-5'>({0}) </span>

                        <ButtonProfile />
                    </p>
                </div>
            </div>

        )

    }
}
