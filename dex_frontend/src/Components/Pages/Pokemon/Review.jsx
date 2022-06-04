import ReplyList from "../../ReplyList"
import Loading from "../../Loader/Loading"
import dfault from "../../../media/0.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaStar, FaRegStar, FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { getTimeDifference, titleCase } from "../../../Helpers/Helpers"
import { replies as repliesJSON } from "../../../Data/replies"

const Review = ({ review, TL_view = false }) => {
	const [user, setUser] = useState({})
	const [pkmn, setPkmn] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [pkmnLoading, setPkmnLoading] = useState(true)
	const [repliesVisible, setRepliesVisible] = useState(false)
	const [replies, setReplies] = useState([])
	const arr = [...Array(10).keys()]

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${review.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				setUser(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [review.added_by])

	useEffect(() => {
		setReplies(repliesJSON.filter((reply) => reply.review === review.id))
	}, [review.id])

	useEffect(() => {
		fetch(`http://localhost:8000/api/pokemon/${review.pkmn}`)
			.then((response) => response.json())
			.then((json) => {
				setPkmn(json)
				setPkmnLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [review.pkmn])

	if (isLoading || pkmnLoading) {
		return <Loading />
	}
	if (TL_view) {
		return (
			<div className="card">
				<img src={pkmn.sprite_url} alt={`${pkmn.name}'s official sprite`} style={{ backgroundColor: "#444" }} />
				<div className="content">
					<h4>
						<Link to={`/profile/${""}`}>{user.username}</Link>
						<span> reviewed</span>
						<Link to={""}> {titleCase(pkmn.name)}</Link>
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
						<FaRegHeart /> 0
					</button>
					<button
						className="fav"
						onClick={() => {
							setRepliesVisible(!repliesVisible)
						}}
					>
						<FaRegCommentAlt /> {replies.length}
					</button>
				</div>
				<div className="replies">{repliesVisible && <ReplyList replies={replies} user={user.username} />}</div>
			</div>
		)
	}

	return (
		<div className="card">
			<img src={dfault} alt={""} />
			<div className="content">
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
					<FaRegHeart /> 0
				</button>
				<button
					className="fav"
					onClick={() => {
						setRepliesVisible(!repliesVisible)
					}}
				>
					<FaRegCommentAlt /> {replies.length}
				</button>
			</div>
			<div className="replies">{repliesVisible && <ReplyList replies={replies} user={user.username} />}</div>
		</div>
	)
}

export default Review
