import React, { Component } from 'react'
import Content from './Content'
import Navigation from './Navigation'

export default class Body extends Component {
    render() {
        const style = {
            margin: 0,
            padding: 0
        }
        return (
            <div className="body ">
                <div className='row mx-0'>
                    <div style={style} className="col-md-5">
                        <Navigation />
                    </div>
                    <div style={style} className="col-md-7">
                        <Content />
                    </div>
                </div>
            </div>  
        )
    }
}
