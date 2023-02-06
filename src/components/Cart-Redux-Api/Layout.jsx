import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Header from './Header'
import Product from './Product'
export default class LayoutCartWithApi extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path='/' exact element={<Product />} />
                        <Route path='/carts' exact element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
