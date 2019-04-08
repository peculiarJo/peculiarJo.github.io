import React from 'react'
import { Avatar } from './Avatar'
import { Menu } from './Menu'
import { Footer } from './Footer'
import './Side.css'


class Side extends React.Component {

	render() {
		
		return (
			<div className="text-center">
		        <Avatar />
		        <Menu />
				<Footer />
			</div>
		)
	}
}

export default Side