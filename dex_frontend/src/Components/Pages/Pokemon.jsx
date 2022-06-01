import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Pokefile from "../Pokefile"
import ReviewList from "../ReviewList"
import { reviews as reviewsJSON } from "../../fake_data/reviews"

const Pokemon = () => {
	const { id } = useParams()
	const [pokemon, setPokemon] = useState({})
	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:8000/api/pokemon/${id}`)
			.then((response) => response.json())
			.then((json) => {
				setPokemon(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [id])

	useEffect(() => {
		pokemon && setReviews(reviewsJSON.filter((review) => review.pkmn === pokemon.id))
	}, [pokemon])

	return (
		<div className="profile">
			<Pokefile pokemon={pokemon} isLoading={isLoading} />
			<div className="post-column">
				<form>
					<input />
					<button>Post</button>
				</form>
				{reviews && <ReviewList reviews={reviews} />}
			</div>
		</div>
	)
}

export default Pokemon
