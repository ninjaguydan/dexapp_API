import { reviews } from "../Data/reviews"
import { posts } from "../Data/posts"
import teams from "../Data/teams"

function generateTimeline(posts = [], reviews = [], teams = []) {
	let timeline = [...posts, ...reviews, ...teams]
	return timeline.sort((a, b) => a.created - b.created)
}
export const timeline = generateTimeline(posts, reviews, teams).reverse()
