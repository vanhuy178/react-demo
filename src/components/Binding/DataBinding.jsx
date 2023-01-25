import React, { Component } from 'react'
import BodyHeroic from '../heroic/BodyHeroic'
import Footer from '../SplitComponent/Footer'
import Header from '../SplitComponent/Header'

export default class DataBinding extends Component {

	//  attribute
	state = {
		name: 'Nguyen Van Huy dep zai',
		title: 'React class component'
	}
	// method
	renderImage() {
		return <img src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/40/COVID-19-1.jpg' alt='Corona virus' />
	}

	renderMultipleComponent() {
		return (<>
			<Header />
			<BodyHeroic />
			<Footer />
		</>
		)
	}
	renderVirusCovid() {
		const virus = {
			id: 1,
			name: 'corona',
			imgage: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/40/COVID-19-1.jpg',
			alias: 'SARS'
		}

		return (
			// code html here
			<div className="text-priamry bg-black">{virus.name}-{virus.alias}</div>
		)
	}
	render() {
		return (
			<div>
				{this.state.name}
				<br />
				{this.state.title}

				<p>
					Binding method
				</p>
				{
					this.renderImage()
				}

				<p>
					return multiple components
				</p>

				{
					this.renderMultipleComponent()
				}

				<p>renderImage method</p>
				{
					this.renderImage()
				}
			</div>
		)
	}
}
