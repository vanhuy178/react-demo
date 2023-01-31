import React, { Component } from 'react'
import ListChairs from './ListChairs';
import ListDetail from './ListDetail';
import './style.css';
export default class LayoutBookingTicket extends Component {
	render() {
		let fullscreen = {
			position: 'fixed',
			width: '100%',
			height: '100%',
			backgroundImage: 'url(./img/BookTickets/bgmovie.jpg)',
			backgroundSize: 'cover'
		}
		let createOverlay = {
			position: 'fixed',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, .7)'
		}
		return (
			<div style={fullscreen} className='bookingMovie'>
				<div className="overlay" style={createOverlay}>
					.<div class="container-fluid">
						<div className="row ">
							<div className="col-md-8">
								{/* title bân đặt ghế */}
								<div className="" style={{ width: '80%', margin: '0 auto' }}>
									<h2 className='text-warning text-uppercase text-center'>bài tập đặt vé xem phim</h2>
									<p className='text-white text-center text-capitalize mb-0 mt-2'>màn hình</p>
									<div className="screen mt-5"></div>
									{/* danh sách ghế */}
									<ListChairs />
								</div>
							</div>
							<div className="col-md-4 ">

								{/* title bên chi tiết thông tin về ghếs */}
								<h2 className='text-light text-uppercase text-center mb-5'>Danh sách ghế bạn chọn</h2>
								<ListDetail />

							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}
