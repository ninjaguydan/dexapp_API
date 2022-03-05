import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" //npm install bootstrap
import "./css/Reset.css"
import "./css/Style.css"
import Header from "./Header"
import MobileNav from "./MobileNav"
import SearchBtn from "./SearchBtn"
import SearchBar from "./SearchBar"
import { useState } from "react"

function App() {
	const searchBtn = <SearchBtn toggleSearch={toggleSearch} />
	const [showSearchBar, setShowSearchBar] = useState(false)

	function toggleSearch() {
		setShowSearchBar(!showSearchBar)
	}

	return (
		<>
			<Header searchBtn={searchBtn} />
			<SearchBar showSearchBar={showSearchBar} />
			<MobileNav searchBtn={searchBtn} />
		</>
	)
}

export default App
