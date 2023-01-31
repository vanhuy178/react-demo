import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
class LayoutKeoBuaBao extends Component {

	renderButtonForUsers = () => {
		return this.props.dataKeoBuaBao.listPlaceABet.map((item, index) => {
			let borderActive = {}
			if (item.status) {
				borderActive = {
					border: '4px solid orange'
				}
			}
			return <button onClick={() => this.props.placeTheBet(item.id)} style={borderActive}><img src={item.img} alt={item.id} /></button>
		})
	}
	render() {

		let animation = `
		@keyframes randomItem${Math.floor(Date.now() * 11)} {
			0 {
			top: -160px;
			opacity: 0
		}
		50% {
			top: -145px;
			opacity: 0.2
		}
			100% {
				top: -200px;
			opacity: 1}
		  }
		`



		const { result, totalWining, totalPlaying, computer } = this.props.dataKeoBuaBao;
		return (
			<div className='layout-keobuabao'>
				<h3 className="header-title text-center mt-2">
					<p>Hello I love you 3000!!!</p>
					{result}
				</h3>
				<div className="row keobuabao-content">
					{/* ironman */}
					<div className="col-4 icon-man-image text-center">
						{/* show kéo búa bao do người dùng chọn */}
						<div className="show-result">
							<img src={this.props.dataKeoBuaBao.listPlaceABet.find(item => item.status === true).img} alt="keo-result" style={{ width: '90px' }} />
						</div>
						<img src="./img/KeoBuaBao/player.png" alt="player" style={{ width: '120px' }} />
						{/* choose of users */}
						<div className="choose">
							{/* render button */}
							{this.renderButtonForUsers()}
						</div>
					</div>
					{/* thông tin và nút bắt đầu */}
					<div className="col-4 text-center mt-1" style={{ position: 'relative', top: '-10px' }}>
						{/* thông tin bàn thắng và lượt chơi */}
						<div className='detail-result'>
							{/* message result */}

							<p>
								Số bàn thắng: <span className='text-danger'>
									{totalWining}</span>
							</p>
							<p>
								Tổng số bàn chơi <span className='text-primary'>
									{totalPlaying}</span>
							</p>
						</div>

						{/* button playing game */}
						<button className="btn btn-success p-3" onClick={() => this.props.startGame()}>Playing Game</button>
					</div>
					{/* thanos */}
					<div className="col-4 text-center">

						<div className="show-result" >
							<div className="">
								<style>
									{animation}
								</style>
								<img src={computer.img} alt="{computer.id}-result"
									style={{ width: '90px', animation: `randomItem${Math.floor(Date.now() * 11)} .2s` }} />
							</div>
						</div>

						<img src="./img/KeoBuaBao/playerComputer.png" alt="thanos" style={{ width: '120px' }} />
					</div>
				</div>
			</div>
		)
	}
}
const mapStateTopProps = state => {
	return {
		dataKeoBuaBao: state.keobuabaoReducerStore
	}
}
const mapDispatchToProps = dispatch => {
	return {
		placeTheBet: (id) => {
			dispatch({
				type: 'PLACE_THE_BET',
				payload: id
			})
		},
		startGame: () => {
			let count = 0
			let setRandomTimesForComputer = setInterval(() => {
				dispatch({
					type: 'RANDOM'
				})
				count++
				if (count >= 30) {
					clearInterval(setRandomTimesForComputer);
					dispatch({
						type: 'END_GAME'
					})
				}
			}, 100)

		}
	}
}
export default connect(mapStateTopProps, mapDispatchToProps)(LayoutKeoBuaBao);
