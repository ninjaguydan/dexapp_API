import { useState, useEffect } from "react"
import { timeline as timelineJSON } from "../fake_data/timeline"
import TimelineCard from "./TimelineCard"
import PostForm from "./Forms/PostForm"

function Timeline() {
	const [timeline, setTimeline] = useState(timelineJSON)

	return (
		<div className="post-column main">
			<PostForm btnText={"Post"} placeholder={"What's on your mind?"} />
			<TimelineCard />
		</div>
	)
}

export default Timeline
