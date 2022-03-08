import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" //npm install bootstrap
import "./css/Reset.css"
import "./css/Style.css"
import Header from "./Header"
import MobileNav from "./MobileNav"
import SearchBtn from "./SearchBtn"
import SearchBar from "./SearchBar"
import MenuBtn from "./MenuBtn"
import { useState } from "react"

function App() {
	const [showSearchBar, setShowSearchBar] = useState(false)
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	function toggleSearch() {
		setShowSearchBar(!showSearchBar)
	}
	function openMenu() {
		setMenuIsOpen(!menuIsOpen)
	}

	const searchBtn = <SearchBtn toggleSearch={toggleSearch} />
	const menuBtn = <MenuBtn openMenu={openMenu} menuIsOpen={menuIsOpen} />

	return (
		<>
			<Header searchBtn={searchBtn} menuBtn={menuBtn} />
			<SearchBar showSearchBar={showSearchBar} />
			<MobileNav searchBtn={searchBtn} />
		</>
	)
}

export default App
