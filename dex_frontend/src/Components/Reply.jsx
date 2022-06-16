import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaRegHeart } from "react-icons/fa"
import { getTimeDifference, truncateStr } from "../Helpers/Helpers"
import UserIcon from "./Navigation/UserIcon"

function Reply({ reply }) {
	let user = useSelector((state) => state.users.filter((user) => user.id === reply.added_by)[0])

	return (
		<div className="card">
			<UserIcon userImg={user.user_img} userName={user.username} userColor={user.bg_color} />
			<div className="content">
				<h4>
					<Link to={`/profile/${""}`}>{truncateStr(user.name)}</Link>
					<span> {truncateStr(user.username)}</span>
					<span className="date"> &#8226; {getTimeDifference(reply.created)}</span>
				</h4>
				<p>{reply.content}</p>
			</div>
			<div className="icon-container">
				<button className="fav">
					<FaRegHeart /> 0
				</button>
			</div>
		</div>
	)
}

export default Reply
