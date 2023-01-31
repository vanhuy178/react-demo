import React, { Component } from 'react'
import DataShoes from './data.json'
import ProductItem from './ProductItem'

export default class ListShoes extends Component {
    renderShoesItem = () => {
        return DataShoes.map((item, index) => {
            return (
                <div className="col-md-4" key={index}>
                    <ProductItem dataItem={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                {/* dcm  */}
                <div className="mt-5"></div>
                <div className="row">
                    <div className="col-3">
                        <div style={{ width: "250px" }} className="nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-toggle="pill" data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="row">
                                    {this.renderShoesItem()}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
