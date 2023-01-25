import React, { Component } from 'react'

export default class RenderCondition extends Component {
    login = true;
    renderContent() {
        if (this.login === true) {
            return <h1>Hello</h1>
        }

        return <button>Đăng nhập</button>
    }
    render() {
        return (
            <div>
                <p>Render conditions</p>
                {this.renderContent()}
            </div>
        )
    }
}
