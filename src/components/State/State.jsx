import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        status: false
    }


    user = {
        name: 'NguyenVanHUy'
    }
    login = () => {
        this.setState({ status: true }, () => console.log(this.state.status))
    }
    renderLoginProcess = () => {
        if (this.state.status) {
            return <h1>{this.user.name}</h1>
        }
        return <button onClick={this.login}>Đăng nhập</button>
    }
    render() {
        return (
            <div>
                State
                <br />
                {this.renderLoginProcess()}

            </div>
        )
    }
}
