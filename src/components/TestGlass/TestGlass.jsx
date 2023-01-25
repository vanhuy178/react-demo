import React, { Component } from 'react'
import './style.css';
import DataGlasses from '../../asset/dataGlasses.json';
import MODEL from './../../asset/images/glassesImage/model.jpg';


export default class TestGlass extends Component {
	state = {
		id: '',
		price: '',
		name: '',
		url: '',
		desc: ''

	}
	renderGlassesList = () => {
		return DataGlasses.map((item, index) => {
			let image = require(`../../asset/images/glassesImage/${item.url}`);
			return <img key={index}
				src={image} alt={item.name}
				style={{ width: '100px', cursor: "pointer" }}
				className={`glasses-image glasses-image-${item.id} p-2 ml-2 border border-width-1`}
				onClick={() => this.handleChangingGlasses(item.id, item.price, item.name, item.url, item.desc)} />
		})
	}
	// handle event click when people click on 
	handleChangingGlasses = (id, price, name, url, desc) => {
		let imageWasChanged = require(`../../asset/images/glassesImage/${url}`)
		this.setState({ id: id, price: price, name: name, image: imageWasChanged, desc: desc })
	}
	render() {

		const { id, name, price, image, desc } = this.state;
		const styleShowHide = {
			display: desc === '' ? "none" : 'block'
		}
		const animationKeyframe = ` @keyframes animationChangingGlass-${Math.floor(Math.random() * 7) + 3} {
				from {
					width: 0;
					opacity: 0;
				}
	
				to {
					width: 140px;
					opacity: 0.8;
				}
		}
		`
		const styleAnimtion = {
			animation: `animationChangingGlass-${Math.floor(Math.random() * 7) + 3} .5s`
		}
		return (
			<div className='glass'>
				{/* tạo lớp background phủ mờ */}
				<div className="" style={{ backgroundColor: 'rgba(0, 0, 0, .5)', height: '100vh' }}>
					{/* headers */}
					<div className="header text-white w-100 text-center py-3" style={{ fontSize: '1.2rem', backgroundColor: 'rgba(148, 0, 211, .6)' }}>
						TRY GLASS ONLINE
					</div>
					{/* model */}
					<div className="container">
						<div className="row mt-3">
							<div className="col-md-6 text-center model">
								<img src={MODEL} alt="" style={{ width: "250px" }} />
								{/* rerender lại keyframe */}
								<style>
									{animationKeyframe}
								</style>
								<img src={image} alt="" className='glasses-item' style={styleAnimtion} />

								{/* miêu tả về chiếc kính */}
								<div className="info-glasses" style={styleShowHide}>
									<div className="glasses-title">
										{name}
									</div>
									<div className="glasses-desc">
										{desc}
									</div>
								</div>
							</div>
							<div className="col-md-6 text-center">
								<img src={MODEL} alt="" style={{ width: "250px" }} />
							</div>
						</div>
					</div>

					{/* thẻ chứa các kính được chọn */}
					<div className="container text-center mt-1 d-flex justify-content-between">
						{this.renderGlassesList()}
					</div>
				</div>
			</div>
		)
	}
}
