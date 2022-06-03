import { reviews } from "./reviews"
import { posts } from "./posts"

function generateTimeline(posts = [], reviews = [], teams = []) {
	let timeline = [...posts, ...reviews, ...teams]
	return timeline.sort((a, b) => a.created - b.created)
}
export const timeline = generateTimeline(posts, reviews)
