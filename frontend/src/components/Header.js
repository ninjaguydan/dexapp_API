import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ searchBtn }) => {
	return (
		<header className="main">
			{/* DexApp Logo */}
			<Link to="/" className="header-logo" />
			{/* Desktop Navigation */}
			<ul className="main-nav"> 
				<li>{searchBtn}</li>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/dex">Pokedex</Link></li> 
				<li className="bold"><Link to="/register">Sign Up</Link></li>
				<li className="bold"><Link to="/login">Login</Link></li>
			</ul>
		</header>
	)
}

export default Header
