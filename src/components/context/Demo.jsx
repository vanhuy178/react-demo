import React, { Component } from 'react'
import Profile from './Profile'

export default class Demo extends Component {
    render() {
        return (
            <div className='demo'>
                <h2 className='text-primary text-center m-3'>Type Script for begginers</h2>
                <div className="" style={{ width: '80%', margin: '0 auto' }}>
                    <Profile />
                </div>

            </div>
        )
    }
}
