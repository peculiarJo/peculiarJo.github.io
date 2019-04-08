import React from 'react'
import './Content.css'
import Home from './Home'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Fun from './Fun'

class Content extends React.Component {

	static defaultProps = {
		books: [
			{"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
		]
	}
	
	state = { 
		open: true,
		freeBookmark: false,
		hiring: true,
		data: [],
		loading: false
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log("The component just updated")
	}

	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
	render() {
		return (
			<div>
                <Home />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Fun />
			</div>
		)
	}
}

export default Content