import { useEffect, useState } from "react"
import Results from "../Results"

const Pokedex = () => {
	const [results, setResults] = useState([])
	const [isFetching, setIsFetching] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:8000/api/pokemon/`)
			.then((response) => response.json())
			.then((json) => {
				setResults(json)
				setIsFetching(false)
			})
			.catch((errors) => console.error(errors))
	}, [])

	return (
		<>
			<h2 className="header1 title">Pokedex</h2>
			<form className="filter-form">
				<label htmlFor="gen">Generation</label>
				<select id="gen" className="form-control-custom">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
				</select>
				<label htmlFor="type">Type</label>
				<select id="type" className="form-control-custom">
					<option>All</option>
					<option>Fire</option>
					<option>Water</option>
					<option>Grass</option>
					<option>Dragon</option>
					<option>Steel</option>
					<option>Dark</option>
					<option>Fairy</option>
				</select>
				<button className="btn secondary">Filter</button>
			</form>
			{isFetching ? <strong className="loading">Loading...</strong> : <Results results={results} />}
		</>
	)
}

export default Pokedex
