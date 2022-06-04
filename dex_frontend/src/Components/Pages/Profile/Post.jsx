import dfault from "../../../media/0.png"
import ReplyList from "../../ReplyList"
import Loading from "../../Loader/Loading"
import { Link } from "react-router-dom"
import { getTimeDifference } from "../../../Helpers/Helpers"
import { useEffect, useState } from "react"
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { replies as repliesJSON } from "../../../Data/replies"

function Post({ post }) {
	const [isLoading, setIsLoading] = useState(true)
	const [repliesVisible, setRepliesVisible] = useState(false)
	const [replies, setReplies] = useState([])
	const [user, setUser] = useState({})

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${post.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				setUser(json)
				setIsLoading(false)
			})
			.catch((errors) => console.error(errors))
	}, [post.added_by])

	useEffect(() => {
		setReplies(repliesJSON.filter((reply) => reply.post === post.id))
	}, [post.id])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="card">
			<img src={dfault} alt={""} />
			<div className="content">
				<h4>
					<Link to={`/profile/${""}`}>{user.name}</Link>
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
			<div className="replies">{repliesVisible && <ReplyList replies={replies} user={user.username} />}</div>
		</div>
	)
}

export default Post
