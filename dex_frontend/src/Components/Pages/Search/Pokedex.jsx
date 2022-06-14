import Results from "./Results"
import usePokemon from "../../../Helpers/usePokemon"

const Pokedex = () => {
	const { data: results, isLoading } = usePokemon()

	return (
		<>
			<h2 className="header1 title">Pokedex</h2>
			<form className="filter-form">
				<label htmlFor="gen">Generation</label>
				<select id="gen" className="form-control-custom">
					<option>All</option>
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
			<Results results={results} isLoading={isLoading} />
		</>
	)
}

export default Pokedex
