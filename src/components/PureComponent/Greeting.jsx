import React, { Component } from 'react'
import { PureComponent } from 'react'

export default class Greeting extends PureComponent {
    render() {
        return (
            <h3>Hello {this.props.name && ','} {this.props.name}</h3>
        )
    }
}
class MyApp extends Component {
    state = {
        name: '',
        address: ''
    }
    render() {
        const { name, address } = this.state
        return (
            <>
                <label>Name{': '}
                    <input type="text" value={this.state.name} />
                </label>
            </>
        )
    }
}