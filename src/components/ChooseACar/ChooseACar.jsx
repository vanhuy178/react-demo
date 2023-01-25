import React, { Component } from 'react'
import { LIST_COLOR } from '../../asset/constant';


export default class ChooseACar extends Component {
	state = {
		images: require('./../../asset/images/products/black-car.jpg')
	}



	renderColor = () => {

		let htmlContent = ''
		htmlContent = LIST_COLOR.map((item, index) => {
			const image = require(`./../../asset/images/products/${item}-car.jpg`);
			const color = require(`./../../asset/images/icons/icon-${item}.jpg`);
			return (
				<div onClick={() => this.renderImage(image)} className=" px-4 mb-2 row border">
					<div className="col-3">
						{/* sử dụng chuyển 360 của thư viện js cloudimage 360 */}
						<img className="mr-2" style={{ width: "50px" }} src={color} alt={`${item}-icons`} />
					</div>
					<div className="text-uppercase col-9">
						<h4 className="card-title">{item} - icons</h4>
					</div>
				</div>
			)
		});
		return htmlContent
	}
	renderImage = (image) => {
		this.setState({ images: image }, () => console.log(this.state.images))
	}

	render() {
		return (
			<div className='containter'>
				<div className="row">
					<div className="col-7">
						{/* chứa hình code chuyển động sử dụng thư viện 360 */}

						<img style={{ width: "100%" }} src={this.state.images} alt="black car" />


						{/* <img src="./AdvanceCar/images-black/images-black-1/civic-1.jpg" alt="" /> */}
						{/* <div class="cloudimage-360" id="gurkha-suv" data-folder="./AdvanceCar/images-black/images-black-1/"
							data-filename-x="civic-{index}.jpg" data-amount-x="8"></div> */}

						{/* thêm thẻ script vào đây */}
						{/* <div className="appendScript"></div> */}
					</div>
					<div className="col-5">
						{/* chứa list chọn hình */}
						<div className="">
							{this.renderColor()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
