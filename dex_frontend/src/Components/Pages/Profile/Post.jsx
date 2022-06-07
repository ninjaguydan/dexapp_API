import ReplyList from "../../ReplyList"
import Loading from "../../Loader/Loading"
import { Link } from "react-router-dom"
import { getTimeDifference } from "../../../Helpers/Helpers"
import { useEffect, useState } from "react"
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { replies as repliesJSON } from "../../../Data/replies"
import { useSelector } from "react-redux"
import UserIcon from "../../Navigation/UserIcon"

function Post({ post }) {
	const [isLoading, setIsLoading] = useState(true)
	const [repliesVisible, setRepliesVisible] = useState(false)
	const [replies, setReplies] = useState([])
	let user = useSelector((state) => state.users.filter((user) => user.id === post.added_by)[0])
	console.log(user)

	useEffect(() => {
		fetch(`http://localhost:8000/api/users/${post.added_by}`)
			.then((response) => response.json())
			.then((json) => {
				// setUser(json)
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
			<UserIcon userImg={user.user_img} userName={user.username} userColor={user.bg_color} />
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
