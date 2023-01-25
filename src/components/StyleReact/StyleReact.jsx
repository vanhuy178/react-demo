import React, { Component } from 'react'

export default class StyleReact extends Component {
    render() {

        const styleBtn = {
            backgroundColor: 'black',
            fontSize: '',
            color: 'white',
            padding: '15px'

        }
        return (
            <div>
                <button style={styleBtn}>Click</button>
            </div>
        )
    }
}
