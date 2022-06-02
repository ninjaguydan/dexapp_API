import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Pokefile from "../Pokefile"
import ReviewList from "../ReviewList"
import PostForm from "../Forms/PostForm"
import { reviews as reviewsJSON } from "../../fake_data/reviews"
import { titleCase } from "../../Helpers/Helpers"
import Loading from "../Loader/Loading"

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

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="profile">
			<Pokefile pokemon={pokemon} />
			<div className="post-column">
				<PostForm review={true} btnText={"Post"} placeholder={`What do you think of ${titleCase(pokemon.name)}?`} />
				{reviews && <ReviewList reviews={reviews} />}
			</div>
		</div>
	)
}

export default Pokemon
