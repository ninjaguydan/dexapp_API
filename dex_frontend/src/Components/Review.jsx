import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "react-spinkit"
import { FaStar, FaRegStar, FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import dfault from "../media/0.png"
import { getTimeDifference } from "../Helpers/Helpers"

const Review = ({ review }) => {
	const [user, setUser] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const arr = [...Array(10).keys()]

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${review.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				setUser(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [])

	if (isLoading) {
		return <Spinner name="circle" className="loading" style={{ width: 50, height: 50 }} />
	}

	return (
		<div className="card">
			<img src={dfault} />
			<div>
				<h4>
					<Link to={`/profile/${""}`}>{user.name}</Link>
					<span> {user.username}</span>
					<span className="date"> &#8226; {getTimeDifference(review.created)}</span>
				</h4>
				<span className="rating">
					{arr.map((value, index) => {
						if (review.rating < index + 1) {
							return <FaRegStar key={index} />
						} else {
							return <FaStar key={index} />
						}
					})}
				</span>
				<p>{review.content}</p>
			</div>
			<div className="icon-container">
				<button className="fav">
					<FaRegHeart />
				</button>
				<button className="fav">
					<FaRegCommentAlt />
				</button>
			</div>
		</div>
	)
}

export default Review
