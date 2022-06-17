import React, { useState } from "react"

const Search = ({ show }) => {
	const [q, setQ] = useState("")
	const [searchParam] = useState(["name"])
	return (
		<form action="/search/" role="search" className={`search-form ${!show && "hidden"}`}>
			{/* <select name="filter">
				<option value="pokemon">Pokemon</option>
				<option value="people">People</option>
			</select> */}
			<input type="search" value={q} onChange={(e) => setQ(e.target.value)} className="form-control" placeholder="Search DexApp..." />
			<button id="search">
				<i className="material-icons">search</i>
			</button>
		</form>
	)
}

export default Search
