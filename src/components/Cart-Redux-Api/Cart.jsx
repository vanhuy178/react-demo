import React, { Component } from 'react'
import { connect } from 'react-redux';
import './reset.css'
import { DecreaseQuantity, DeleteCart, IncreaseQuantity } from '../../redux/action/card-api-action';
class Cart extends Component {

	render() {
		const { items } = this.props
		console.log('this is from card', items.Carts)
		let ListCart = [];
		let TotalCart = 0;
		if (items.Carts !== []) {
			Object.keys(items.Carts).forEach(function (item) {
				TotalCart += items.Carts[item].quantity * items.Carts[item].price;
				ListCart.push(items.Carts[item]);
			});
		}


		function TotalPrice(price, tonggia) {
			return Number(price * tonggia).toLocaleString('en-US');
		}
		return (
			<div className='row'>
				<div className="col-md-12">
					<table className="table">
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Image</th>
								<th>Price</th>
								<th>Quanlity</th>
								<th>Total Price</th>
							</tr>
						</thead>

						{/* handle logic here */}
						<tbody>
							{
								ListCart.map((item, index) => {
									const { id, title, image, price, quantity } = item
									return (
										<tr>
											<td><div className="btn btn-danger" onClick={() => this.props.dispatch(DeleteCart(index))}>X</div></td>
											<td>{title}</td>
											<td><img src={image} alt={`${image}-${id}`} style={{ width: '100px' }} /></td>
											<td>{Number(price).toLocaleString()} $</td>
											<td>
												<button className="btn btn-danger" onClick={() => this.props.dispatch(DecreaseQuantity(index))}>-</button>
												<span className='mx-2'>{quantity}</span>
												<button className="btn btn-primary" onClick={() => this.props.dispatch(IncreaseQuantity(index))}>+</button>
											</td>
											<td>{TotalPrice(quantity, price)} $</td>
										</tr>
									)
								})
							}
							<tr>
								<td colSpan={4}></td>
								<td>Tổng giá</td>
								<td>0 $</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	// console.log(state)
	return {
		items: state._todoPoduct
	}
}
export default connect(mapStateToProps, null)(Cart);