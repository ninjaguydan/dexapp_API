import ReplyList from "../../ReplyList"
import { Link } from "react-router-dom"
import { getTimeDifference } from "../../../Helpers/Helpers"
import { useEffect, useState } from "react"
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { useSelector } from "react-redux"
import UserIcon from "../../Navigation/UserIcon"

function Post({ post }) {
	const [repliesVisible, setRepliesVisible] = useState(false)
	const replies = useSelector((state) => state.replies.filter((reply) => reply.for === "post" && reply.forId === post.id))
	let user = useSelector((state) => state.users.filter((user) => user.id === post.added_by)[0])

	return (
		<div className="card">
			<UserIcon userImg={user.user_img} userName={user.username} userColor={user.bg_color} />
			<div className="content">
				<h4>
					<Link to={`/profile/${user.username}`}>{user.name}</Link>
					<span> {user.username}</span>
					<span className="date"> &#8226; {getTimeDifference(post.created)}</span>
				</h4>
				<p>{post.content}</p>
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
			<div className="replies">
				{repliesVisible && <ReplyList replies={replies} user={user.username} kind={{ name: "post", id: post.id }} />}
			</div>
		</div>
	)
}

export default Post
