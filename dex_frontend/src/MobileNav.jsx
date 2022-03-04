import React from "react"
import dex_icon from "./media/dex-icon.svg"
import { Link } from "react-router-dom"

const MobileNav = () => {
	return (
		<nav>
			<ul className="mobile-nav">
				{/* <li>{searchBtn}</li> */}
				<li>
					<Link to="/">
						<i className="material-icons">home</i>
					</Link>
				</li>
				<li>
					<Link to="/dex">
						<img className="dex-icon nav-icon" src={dex_icon} alt="Pokedex" />
					</Link>
				</li>
				<li>
					<Link to="/login/">
						<i className="material-icons">account_circle</i>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default MobileNav
