import React, { Component } from 'react'

export default class ChildrenProps extends Component {

    render() {
        let styleImage = {
            height: "50px"
        }

        const { id, name, src, desc, color } = this.props.productCarItem;
        const renderColor = () => {
            return color.map((item, index) => {
                return <button>{item}</button>
            })
        }
        return (
            <div>
                THIS IS CHILDREN PROPS
                {/* <img src={this.props.sourceImage} alt="huy hoạch đô thị" style={styleImage} /> */}
                <div className="card" style={{ width: '18rem' }}>
                    <img src={src} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <p className="card-text">{desc}</p>

                        {renderColor()}
                    </div>
                </div>

            </div>
        )
    }
}
