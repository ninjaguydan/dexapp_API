import ReplyList from "../../ReplyList"
import Loading from "../../Loader/Loading"
import UserIcon from "../../Navigation/UserIcon"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaStar, FaRegStar, FaRegHeart, FaRegCommentAlt } from "react-icons/fa"
import { getTimeDifference, titleCase } from "../../../Helpers/Helpers"
import usePokemon from "../../../Helpers/usePokemon"

const Review = ({ review, TL_view = false }) => {
	const [repliesVisible, setRepliesVisible] = useState(false)
	const replies = useSelector((state) => state.replies.filter((reply) => reply.for === "review" && reply.forId === review.id))
	const arr = [...Array(10).keys()]
	let user = useSelector((state) => state.users.filter((user) => user.id === review.added_by)[0])
	const { data: pkmn, isLoading } = usePokemon(review.pkmn)

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="card">
			{TL_view ? (
				<img src={pkmn.sprite_url} alt={`${pkmn.name}'s official sprite`} style={{ backgroundColor: "#444" }} />
			) : (
				<UserIcon userImg={user.user_img} userName={user.username} userColor={user.bg_color} />
			)}

			<div className="content">
				<h4>
					<Link to={`/profile/${user.username}`}>{TL_view ? user.username : user.name}</Link>
					<span> {TL_view ? "reviewed" : user.username}</span>
					{TL_view && <Link to={`/pokemon/${pkmn.id}`}> {titleCase(pkmn.name)}</Link>}
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
					<FaRegHeart /> {review.likes.length}
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
				{repliesVisible && <ReplyList replies={replies} user={user.username} kind={{ name: "review", id: review.id }} />}
			</div>
		</div>
	)
}

export default Review
