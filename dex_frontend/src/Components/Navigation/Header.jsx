import { Link } from "react-router-dom"
import DesktopNav from "./DesktopNav"

const Header = ({ searchBtn }) => {
	return (
		<header className="site-header">
			<Link to="/" className="header-logo" />
			<DesktopNav searchBtn={searchBtn} />
		</header>
	)
}

export default Header
