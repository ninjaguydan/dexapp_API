import React from "react"
import { NavLink } from "react-router-dom"

// const activeStyle = {
// 	color: "#009df1",
// }

const DesktopNav = ({ searchBtn }) => {
	return (
		<nav>
			<ul className="main-nav">
				<li>{searchBtn}</li>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/dex">Pokedex</NavLink>
				</li>
				<li className="bold">
					<NavLink to="/register">Sign Up</NavLink>
				</li>
				<li className="bold">
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default DesktopNav
