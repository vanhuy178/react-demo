import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailResult from './DetailResult';
import RandomDice from './RandomDice';
import './style.css';
class LayoutRollTheDice extends Component {
	render() {
		return (
			<div className='layout-rtd'>
				{/* title */}
				<div className="header">
					<div className="title text-uppercase">
						<h1>
							game đổ xúc xắc
						</h1>
					</div>
				</div>

				{/* three dice's picure */}
				<RandomDice />

				<DetailResult />

				<div className="text-center">
					<button
						onClick={() => this.props.playingGame()}
						className='btn btn-success btn-play-game p-3 text-uppercase rounded'
					>Play game</button>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		playingGame: () => {
			dispatch({
				type: 'PLAYING_GAME'
			})
		}
	}
}
export default connect(null, mapDispatchToProps)(LayoutRollTheDice)