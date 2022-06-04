import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter as MyRouter } from "react-router-dom"
import Header from "./Components/Header"
import MobileNav from "./Components/Navigation/MobileNav"
import SearchBtn from "./Components/Buttons/SearchBtn"
import SearchBar from "./Components/Forms/SearchBar"
import MenuBtn from "./Components/Buttons/MenuBtn"
import UserMenuMobile from "./Components/Navigation/UserMenuMobile"
import Login from "./Components/Pages/Login/Login"
import Home from "./Components/Pages/Home/Home"
import Register from "./Components/Pages/Login/Register"
import Pokemon from "./Components/Pages/Pokemon/Pokemon"
import Pokedex from "./Components/Pages/Search/Pokedex"

function App() {
	const [showSearchBar, setShowSearchBar] = useState(false)
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const searchBtn = <SearchBtn toggleSearch={() => setShowSearchBar(!showSearchBar)} />

	return (
		<MyRouter>
			<Header searchBtn={searchBtn} />
			{showSearchBar && <SearchBar />}
			<MenuBtn openMenu={() => setMenuIsOpen(!menuIsOpen)} menuIsOpen={menuIsOpen} />
			{menuIsOpen && <UserMenuMobile />}
			<MobileNav searchBtn={searchBtn} />
			<div className="app-container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/dex" element={<Pokedex />} />
					<Route path="/pokemon/:id" element={<Pokemon />} />
				</Routes>
			</div>
		</MyRouter>
	)
}

export default App
