import React from "react"
import { Link } from "react-router-dom"

const DesktopNav = () => {
	return (
		<nav>
			<ul className="main-nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dex">Pokedex</Link>
				</li>
				<li className="bold">
					<Link to="/register">Sign Up</Link>
				</li>
				<li className="bold">
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	)
}

export default DesktopNav
