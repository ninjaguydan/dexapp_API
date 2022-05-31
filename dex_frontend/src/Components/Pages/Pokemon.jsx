import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Profile from "../Profile"

const Pokemon = () => {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState(null)

	useEffect(() => {
		fetch(`http://localhost:8000/api/pokemon/${id}`)
			.then((response) => response.json())
			.then((json) => setPokemon(json))
			.catch((errors) => console.error(errors))
	}, [])

	return (
		<div>
			{pokemon && <h1>This is the {pokemon.name} page</h1>}
			<Profile pokemon={pokemon} />
		</div>
	)
}

export default Pokemon
