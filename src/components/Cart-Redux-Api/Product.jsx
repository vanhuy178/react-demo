import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AddCart, fecthProductRequest } from '../../redux/action/card-api-action';
import './reset.css';
class Product extends Component {
	componentDidMount() {
		this.props.actFetchProductRequests();
	}
	render() {
		const { _products } = this.props.products;


		// console.log(_products);
		return (
			<div className='row mt-5 '>
				<div className="col-md-12">
					<div className="row">
						{
							_products.map((item, index) => {
								const { id, image, price, title } = item;
								return (
									<div className="col-12 col-sm-6 col-md-3 mb-4">
										<div className="card" style={{ width: '14rem' }}>
											<img className="card-img-top" src={image} alt={price} />
											<div className="card-body">
												<h5 className="card-title" style={{ fontSize: '14px' }}>{title}</h5>
												<a href="#" className="btn btn-primary" onClick={() => this.props.addItem(item)}>ADD CART</a>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		products: state._todoPoduct
	}
}
// this is just call take value bcause getAllProduct was value from dispatch(getAppProducst(res.data);
const mapDispatchToProps = dispatch => {
	return {
		actFetchProductRequests: () => dispatch(fecthProductRequest()),
		addItem: item => dispatch(AddCart(item))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)