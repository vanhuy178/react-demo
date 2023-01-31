import React, { Component } from 'react'
import { connect } from 'react-redux'
class DetailResult extends Component {
	render() {
		const { diceFromProps } = this.props;
		// console.log(diceFromProps);
		// console.log('from detail', diceFromProps.dice)
		return (
			<div className='detail-result'>
				<p>
					BẠN CHỌN: <span className='text-success'>
						{diceFromProps.dice ? 'Tài' : 'Xỉu'}</span>
				</p>
				<p>
					Số bàn thắng: <span className='text-danger'>
						{diceFromProps.totalWining}</span>
				</p>
				<p>
					Tổng số bàn chơi <span className='text-primary'>
						{diceFromProps.totalPlaying}</span>
				</p>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return { diceFromProps: state.diceReducerStore }
}
export default connect(mapStateToProps)(DetailResult);