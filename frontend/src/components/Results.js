import React, {useState, useEffect} from 'react'
import ResultCard from './buttons/ResultCard'
import { DisappearedLoading } from 'react-loadingg'

const Results = () => {

	const [pokemon, setPokemon] = useState([])
	const [isFetching, setIsFetching] = useState(true)

	useEffect(() => {
		fetch('http://localhost:8000/api/pokemon/', {
			'method':'GET',
			headers: {
				'Content-Type':'application/json',
			}
		})
		.then(response => response.json())
		.then(response => {
			setPokemon(response)
			setIsFetching(false)
		})
		.catch(errors => console.log(errors))
	}, [])

	return (
		<section className="dex">
			<h5>Showing all types from each generation</h5>
			{isFetching ? <div className="loading">Loading...</div> : null}
			<div className="results">
				{pokemon.map(pkmn => {
					return <ResultCard id={pkmn.id} art_url={pkmn.art_url} name={pkmn.name} />
				})}
			</div>
		</section>
	)
}

export default Results
