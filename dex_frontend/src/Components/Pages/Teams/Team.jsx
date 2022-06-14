import ReplyList from "../../ReplyList"
import Loading from "../../Loader/Loading"
import { useState, useEffect } from "react"
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { getTimeDifference } from "../../../Helpers/Helpers"

function Team({ team }) {
	const [user, setUser] = useState({})
	const [members, setMembers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [repliesVisible, setRepliesVisible] = useState(false)
	const [replies, setReplies] = useState([])

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${team.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				setUser(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [team.added_by])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="card">
			<div className="content team">
				<h4>
					<Link to={`/profile/${""}`}>{user.username}</Link>
					<span> created the team, </span>
					<Link to={""}> {team.name}</Link>
					<span className="date"> &#8226; {getTimeDifference(team.created)}</span>
				</h4>
				<span className="team-container">
					{team.members.map((value) => {
						return (
							<Link to={`/pokemon/${value}`} key={value}>
								<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`} />
							</Link>
						)
					})}
				</span>
			</div>
			<div className="icon-container">
				<button className="fav">
					<FaRegHeart /> {team.likes.length}
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

export default Team
