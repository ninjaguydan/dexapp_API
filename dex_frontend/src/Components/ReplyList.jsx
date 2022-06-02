import { useState, useEffect } from "react"
import { replies as repliesJSON } from "../fake_data/replies"
import Reply from "./Reply"

function ReplyList({ postId }) {
	const [replies, setReplies] = useState([])

	useEffect(() => {
		setReplies(repliesJSON.filter((reply) => reply.post === postId))
	}, [])

	return (
		<>
			{replies.map((reply) => {
				return <Reply reply={reply} key={reply.id} />
			})}
		</>
	)
}

export default ReplyList
