import { useState, useEffect } from "react"
import generateTimeline from "../../../Helpers/Timeline"
import TimelineCard from "./TimelineCard"
import PostForm from "../../Forms/PostForm"
import { useSelector } from "react-redux"

function Timeline() {
	const [timeline, setTimeline] = useState([])
	const loggedUser = useSelector((state) => state.loggedUser)

	return (
		<div className="post-column main">
			{loggedUser && <PostForm btnText={"Post"} placeholder={"What's on your mind?"} />}
			{timeline.length === 0 ? (
				<div className="card">Nothing to show!</div>
			) : (
				timeline.map((item, index) => {
					return <TimelineCard data={item} review={item.rating} team={item.name} key={index + 1} />
				})
			)}
		</div>
	)
}

export default Timeline
