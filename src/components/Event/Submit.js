import React, { Component } from 'react'

export default class Submit extends Component {
    handleSubmit(name) {
        alert('click cc nè ' + name)
    }

    handleSubmitByParam(value) {
        alert('Hello a zai ' + value)
    }
    render() {
        return (
            <div>
                {/* lưu ý không dùng ngoặc */}
                <button className='btn btn-success' onClick={() => this.handleSubmit('huy')}>Click me</button>
                <button className='btn btn-success' onClick={this.handleSubmitByParam.bind(this, 'huy')}>Click me by bind</button>
            </div>
        )
    }
}
