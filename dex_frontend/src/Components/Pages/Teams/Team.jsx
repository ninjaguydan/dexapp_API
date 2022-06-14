import ReplyList from "../../ReplyList"
import { useState } from "react"
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { getTimeDifference } from "../../../Helpers/Helpers"
import { useSelector } from "react-redux"

function Team({ team }) {
	const user = useSelector((state) => state.users.filter((user) => user.id === team.added_by))
	const [repliesVisible, setRepliesVisible] = useState(false)
	const [replies, setReplies] = useState([])

	return (
		<div className="card">
			<div className="content team">
				<h4>
					<Link to={`/profile/${user.username}`}>{user.username}</Link>
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
