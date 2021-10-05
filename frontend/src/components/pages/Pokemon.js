import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PostForm from '../buttons/PostForm'
import Profile from '../Profile'

const Pokemon = () => {

	const { id } = useParams()
	const [pokemon, setPokemon] = useState(null)
	const [user, setUser] = useState(true)
	const [values, setValues] = useState({
		review : "",
		rating : ""
	})

	useEffect(() => {

	}, [])

	function handleChange(e){
		setValues({...values, [e.target.name]: e.target.value})
	}

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
	}, [id])


	return (
		<main className="wrapper">
			<section className="column profile">
				{ pokemon && <Profile pokemon={pokemon} />}
			</section>
			<br /><br /><br />

			<div className="column posts">
			{!user ? <div className="card">						
						<h5>Log in or create an account to leave a review!</h5>
					</div>					
			: null }
			{ pokemon && <PostForm type="review" pkmn={pokemon.name} handleChange={handleChange} values={values} /> }
			</div>

		</main>
	)
}

export default Pokemon
