import React from "react"
import { Link } from "react-router-dom"
import DesktopNav from "./DesktopNav"

const Header = () => {
	return (
		<header className="site-header">
			<Link to="/" className="header-logo" />
			<DesktopNav />
		</header>
	)
}

export default Header
