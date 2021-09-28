import React from 'react'

const SearchBtn = ({ searchToggle }) => {
	return (
		<button className="nav-icon search-icon" onClick={() => searchToggle()}>
			<i className="material-icons">search</i> 
		</button>
	)
}

export default SearchBtn
