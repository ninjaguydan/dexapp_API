import Reply from "./Reply"
import PostForm from "./Forms/PostForm"
import { useSelector } from "react-redux"

function ReplyList({ replies, user }) {
	const loggedUser = useSelector((state) => state.loggedUser)
	return (
		<>
			{replies.map((reply) => {
				return <Reply reply={reply} key={reply.id} />
			})}
			{loggedUser && <PostForm review={false} btnText={"Reply"} placeholder={`Replying to ${user}...`} />}
		</>
	)
}

export default ReplyList
