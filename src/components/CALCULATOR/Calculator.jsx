import React, { Component } from 'react';
import './styles/style.css'
export default class Calculator extends Component {
	state = {
		calc: '',
		result: ''
	}

	// renderButton = () => {
	// 	const btn = []
	// }
	updateCalc = value => {
		const ops = ['/', '+', '-', '*', '.'];
		const { calc } = this.state;

		if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
			return
		}
		// nối chuổi để render
		const newCalc = this.state.calc + value;
		this.setState({ calc: newCalc })
	}

	calculate = () => {
		const { calc } = this.state
		const result = calc === '' ? "" : eval(calc);
		const resultToString = result.toString();
		this.setState({ result: resultToString });
	}

	deleteLast = () => {
		const { calc, result } = this.state

		if (calc === '') {
			return
		}

		const calcSliceLastElement = calc.slice(0, -1);
		calcSliceLastElement.length === 0 ? this.setState({ result: "", calc: '' }) : this.setState({ calc: calcSliceLastElement })
	}

	deleteAll = () => {
		this.setState({ result: '', calc: '' })
	}
	render() {
		const { calc, result } = this.state;
		return (
			<div className="calculator d-flex justify-content-center align-items-center">
				{/* create grid */}
				<div className='calculator-grid'>
					{/* màn hình hiển thị */}
					<div className="output d-flex flex-column justify-content-between align-items-end">
						<div className="previos-operand">{calc === '' ? "0" : calc}</div>
						<div className="current-operand">{result || '0'}</div>
					</div>


					{/* các nút số và nút tính toán */}
					<button className='span-two' onClick={this.deleteAll}>AC</button>
					<button onClick={this.deleteLast}>DEl</button>
					<button onClick={() => this.updateCalc('/')}>/</button>
					<button onClick={() => this.updateCalc('1')}>1</button>
					<button onClick={() => this.updateCalc('2')}>2</button>
					<button onClick={() => this.updateCalc('3')}>3</button>
					<button onClick={() => this.updateCalc('*')}>*</button>
					<button onClick={() => this.updateCalc('4')}>4</button>
					<button onClick={() => this.updateCalc('5')}>5</button>
					<button onClick={() => this.updateCalc('6')}>6</button>
					<button onClick={() => this.updateCalc('+')}>+</button>
					<button onClick={() => this.updateCalc('7')}>7</button>
					<button onClick={() => this.updateCalc('8')}>8</button>
					<button onClick={() => this.updateCalc('9')}>9</button>
					<button onClick={() => this.updateCalc('-')}>-</button>
					<button onClick={() => this.updateCalc('.')}>.</button>
					<button onClick={() => this.updateCalc('0')}>0</button>
					<button className='span-two' onClick={() => this.calculate()} >=</button>
				</div>
			</div>
		)
	}
}
