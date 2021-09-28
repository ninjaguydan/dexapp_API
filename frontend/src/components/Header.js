import React from 'react'
import SearchBtn from './buttons/SearchBtn'

const Header = ({ searchToggle }) => {
	return (
		<header className="main">
			{/* DexApp Logo */}
			<a href="/" className="header-logo"> </a>
			{/* Desktop Navigation */}
			<ul className="main-nav"> 
				<li><SearchBtn searchToggle={searchToggle} /></li>
				<li><a href="/">Home</a></li>
				<li><a href="/search/dex">Pokedex</a></li> 
				<li className="bold"><a href="/login/register">Sign Up</a></li>
				<li className="bold"><a href="/login/">Login</a></li>
			</ul>
		</header>
	)
}

export default Header
