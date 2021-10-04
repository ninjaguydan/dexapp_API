import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Profile from '../Profile'

const Pokemon = () => {

	const { id } = useParams()
	const [pokemon, setPokemon] = useState(null)

	useEffect(() => {
		fetch(`http://localhost:8000/api/pokemon/${id}/`, {
			'method':'GET',
			headers: {
				'Content-Type':'application/json',
			}
		})
		.then(response => response.json())
		.then(response => setPokemon(response))
		.catch(errors => console.log(errors))
	}, [])


	return (
		<main className="wrapper">
			<div className="column profile">
				{ pokemon && <Profile pokemon={pokemon} />}
			</div>
		</main>
	)
}

export default Pokemon
