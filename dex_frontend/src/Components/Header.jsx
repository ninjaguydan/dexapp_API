import React from "react"
import { Link } from "react-router-dom"
import DesktopNav from "./Navigation/DesktopNav"

const Header = ({ searchBtn }) => {
	return (
		<header className="site-header">
			<Link to="/" className="header-logo" />
			<DesktopNav searchBtn={searchBtn} />
		</header>
	)
}

export default Header
