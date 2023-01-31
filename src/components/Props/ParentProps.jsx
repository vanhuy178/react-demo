import React, { Component } from 'react'
import ChildFunction from './ChildFunction'
import ChildrenProps from './ChildrenProps'

export default class ParentProps extends Component {
    productCar = {
        id: 1,
        name: 'Camry',
        src: 'https://danchoioto.vn/wp-content/uploads/2022/03/ca-hai-phien-ban-dong-co-2-0l-va-2-5l-moi-cua-toyota-camry-deu-manh-hon-dang-ke-so-voi-dong-co-cu.jpeg',
        desc: 'Chiếc xe đẹp và khá đắt',
        color: ['red', 'blue', 'green', 'white', 'black']
    }
    alertMessage
    render() {
        return (
            <div>
                THIS IS PARENT PROPS
                {/* sử dụng thẻ con */}
                <ChildrenProps productCarItem={this.productCar} />
                <ChildFunction sourceImage={this.productCar} />
            </div>
        )
    }
}
