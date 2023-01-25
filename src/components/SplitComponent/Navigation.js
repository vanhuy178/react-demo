import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div className='bg-success text-white h-100 w-100 '>
                <h1 className='mb-5'>Navigation</h1>

                <ul className='list-unstyled'>
                    <li>Trang chủ</li>
                    <li>Mua sắm</li>
                    <li>Đăng nhập</li>
                    <li>Tuyển dụng</li>
                </ul>
            </div>
        )
    }
}
