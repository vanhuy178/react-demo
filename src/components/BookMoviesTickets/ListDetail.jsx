import React, { Component } from 'react';
import { connect } from 'react-redux'
import { cancledBookingChair, resetBooking } from '../../redux/action/bookTicketAction';
class ListDetail extends Component {
	render() {
		const styleButon = {
			width: '39px',
			height: '39px',
			borderRadius: '5px'
		}
		const styleText = {
			fontSize: '25px'
		}

		return (
			<div className='text-light' >
				<div style={styleText}><button className='gheDuocChon'></button> Ghế đã đặt</div>
				<div style={styleText}><button className='gheDangChon'></button> Ghế đang chọn</div>
				<div style={styleText}><button className='' style={styleButon}></button> Ghế chưa đặt</div>
				<table className='table text-white mt-3' border='1'>
					<thead style={{ fontSize: '20px' }}>
						<tr>
							<th>Số ghế</th>
							<th>Giá</th>
							<th>Hủy</th>
						</tr>
					</thead>
					<tbody>
						{/* <tr>
							<td>A01</td>
							<td>400</td>
							<td className='text-danger text-center'>X</td>
						</tr> */}

						{
							this.props.listBooking.map(item => {
								return (
									<tr>
										<td>{item.soGhe}</td>
										<td>{item.gia.toLocaleString()}</td>
										<td className='text-light text-center'>
											<button className='btn btn-danger'
												onClick={() => this.props.dispatch(cancledBookingChair(item.soGhe))}
											>X</button></td>
									</tr>
								)
							})
						}
						{/* binding dữ liệu */}
						<tr>
							<td>Tổng tiền</td>
							<td>
								{
									this.props.listBooking.reduce((total, item) => {
										return total += item.gia
									}, 0).toLocaleString() || 0
								}
							</td>
							<td className='text-primary text-center'
								onClick={() => this.props.dispatch(resetBooking())}
							>Reset</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		listBooking: state.bookSticketsReducerStore.listBooking
	}
}
export default connect(mapStateToProps)(ListDetail);