import { useState, useEffect } from "react"
import { timeline as timelineJSON } from "../../../Helpers/Timeline"
import TimelineCard from "./TimelineCard"
import PostForm from "../../Forms/PostForm"
import { useSelector } from "react-redux"

function Timeline() {
	const [timeline, setTimeline] = useState(timelineJSON)
	const loggedUser = useSelector((state) => state.loggedUser)

	return (
		<div className="post-column main">
			{loggedUser && <PostForm btnText={"Post"} placeholder={"What's on your mind?"} />}
			{timeline.map((item) => {
				return <TimelineCard data={item} review={item.rating} team={item.name} />
			})}
		</div>
	)
}

export default Timeline
