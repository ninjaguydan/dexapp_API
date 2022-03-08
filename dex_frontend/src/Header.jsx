import React from "react"
import { Link } from "react-router-dom"
import DesktopNav from "./DesktopNav"

const Header = ({ searchBtn, menuBtn }) => {
	return (
		<header className="site-header">
			<Link to="/" className="header-logo" />
			<DesktopNav searchBtn={searchBtn} />
			{menuBtn}
		</header>
	)
}

export default Header
