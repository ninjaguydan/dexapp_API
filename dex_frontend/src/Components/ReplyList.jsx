import Reply from "./Reply"
import PostForm from "./Forms/PostForm"

function ReplyList({ replies, user }) {
	return (
		<>
			{replies.map((reply) => {
				return <Reply reply={reply} key={reply.id} />
			})}
			<PostForm review={false} btnText={"Reply"} placeholder={`Replying to ${user}...`} />
		</>
	)
}

export default ReplyList
