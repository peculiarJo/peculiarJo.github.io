import React from 'react'
import Scrollspy from 'react-scrollspy'

export const Menu = ()=>{
	return (
		<nav className="navbar" role="navigation" id="myMenuNav">
			<Scrollspy items={['home','about','skills','education','experience','fun']} currentClassName="active" offset={-250}>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#fun">Fun!</a></li>
			</Scrollspy>
		</nav>
	)
}