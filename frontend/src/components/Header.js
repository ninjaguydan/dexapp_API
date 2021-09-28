import React from 'react'

const Header = () => {
	return (
		<header className="main">
			{/* DexApp Logo */}
			<a href="/" className="header-logo"></a>
			{/* Desktop Navigation */}
			<ul className="main-nav"> 
				<li><i className="material-icons nav-icon search-icon">search</i></li>
				<li><a href="/">Home</a></li>
				<li><a href="/search/dex">Pokedex</a></li> 
				<li className="bold"><a href="/login/register">Sign Up</a></li>
				<li className="bold"><a href="/login/">Login</a></li>
			</ul>
		</header>
	)
}

export default Header
