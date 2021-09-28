import React from 'react'

//------------------------------ Search Icon Function ------------------------------ //
const Search = () => {
	
	return (
		<form action="/search/" role="search" className="search-form hidden">
			<select name="filter">
				<option value="pokemon">Pokemon</option>
				<option value="people">People</option>
			</select>
			<input type="text" name="q" class="form-control" placeholder="Search DexApp..." />
			<button id="search"><i className="material-icons">search</i></button>
		</form>
	)
}

export default Search
