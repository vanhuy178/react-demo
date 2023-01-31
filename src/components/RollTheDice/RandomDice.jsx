import React, { Component } from 'react'
import { connect } from 'react-redux';
class RandomDice extends Component {
    renderRandomThreOtherImageDice = () => {
        const { listDice } = this.props;
        return listDice.map((item, index) => {
            return <img className='imgage-random-dice-item' src={item.picture} alt={`xúc xắc ${item.id}`} />
        })
    }
    render() {
        const { placeABet } = this.props;
        return (
            <div className="random-dice">
                <button className='btn btn-xucsac tai' onClick={() => placeABet(true)}>Tài</button>
                <div className="imgage-random-dice">
                    {this.renderRandomThreOtherImageDice()}
                </div>
                <button className='btn btn-xucsac xiu' onClick={() => placeABet(false)}>Xỉu</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { listDice: state.diceReducerStore.listDice }
}

const mapDispatchToProps = dispatch => {
    return {
        placeABet: (status) => {
            const betAction = {
                type: 'BET',
                payload: status
            }

            dispatch(betAction)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RandomDice);