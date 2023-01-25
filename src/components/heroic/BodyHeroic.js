import React, { Component } from 'react'
import Banner from './Banner'
import ItemHeroic from './ItemHeroic'

export default class BodyHeroic extends Component {
    render() {
        return (
            <div className='body-heroic'>
                <Banner />
                <ItemHeroic />
            </div>
        )
    }
}
