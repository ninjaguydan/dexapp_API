import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" //npm install bootstrap
import "./css/Reset.css"
import "./css/Style.css"
import Header from "./Header"
import MobileNav from "./MobileNav"

function App() {
	return (
		<>
			<Header />
			<MobileNav />
		</>
	)
}

export default App
