import React, { Component } from 'react'

export default class ButtonProfile extends Component {
    render() {
        return (
            <>
                <button className="btn btn-danger"><i class="fa-solid fa-thumbs-down"></i></button>
                <span className="mx-2"></span>
                <button className="btn btn-primary"><i class="fa-solid fa-thumbs-up"></i></button>
            </>
        )
    }
}
