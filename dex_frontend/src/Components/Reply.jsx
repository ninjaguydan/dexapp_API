import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loader/Loading"
import dfault from "../media/0.png"
import { FaRegHeart } from "react-icons/fa"
import { getTimeDifference } from "../Helpers/Helpers"

function Reply({ reply }) {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState({})

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${reply.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				setUser(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="card">
			<img src={dfault} />
			<div>
				<h4>
					<Link to={`/profile/${""}`}>{user.name}</Link>
					<span> {user.username}</span>
					<span className="date"> &#8226; {getTimeDifference(reply.created)}</span>
				</h4>
				<p>{reply.content}</p>
			</div>
			<div className="icon-container">
				<button className="fav">
					<FaRegHeart />
				</button>
			</div>
		</div>
	)
}

export default Reply
