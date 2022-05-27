import React from "react"
import { NavLink } from "react-router-dom"

const activeStyle = {
	color: "#009df1",
}

const DesktopNav = ({ searchBtn }) => {
	return (
		<nav>
			<ul className="main-nav">
				<li>{searchBtn}</li>
				<li>
					<NavLink to="/" activeStyle={activeStyle}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/dex" activeStyle={activeStyle}>
						Pokedex
					</NavLink>
				</li>
				<li className="bold">
					<NavLink to="/register" activeStyle={activeStyle}>
						Sign Up
					</NavLink>
				</li>
				<li className="bold">
					<NavLink to="/login" activeStyle={activeStyle}>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default DesktopNav
