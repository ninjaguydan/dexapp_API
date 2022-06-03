import React from "react"

const Search = () => {
	return (
		<form action="/search/" role="search" className="search-form">
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
