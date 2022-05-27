import React from "react"

const Search = ({ showSearchBar }) => {
	return (
		<form action="/search/" role="search" className={showSearchBar ? "search-form" : "search-form hidden"}>
			<select name="filter">
				<option value="pokemon">Pokemon</option>
				<option value="people">People</option>
			</select>
			<input type="text" name="q" className="form-control" placeholder="Search DexApp..." />
			<button id="search">
				<i className="material-icons">search</i>
			</button>
		</form>
	)
}

export default Search
