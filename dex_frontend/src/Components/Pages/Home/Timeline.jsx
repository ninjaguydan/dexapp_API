import { useState, useEffect } from "react"
import { timeline as timelineJSON } from "../../../Helpers/Timeline"
import TimelineCard from "./TimelineCard"
import PostForm from "../../Forms/PostForm"

function Timeline() {
	const [timeline, setTimeline] = useState(timelineJSON)

	return (
		<div className="post-column main">
			<PostForm btnText={"Post"} placeholder={"What's on your mind?"} />
			{timeline.map((item) => {
				return <TimelineCard data={item} review={item.rating} team={item.name} />
			})}
		</div>
	)
}

export default Timeline
