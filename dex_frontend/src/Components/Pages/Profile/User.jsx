import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Profile from "./Profile"
import PostForm from "../../Forms/PostForm"
import PostList from "./PostList"

const User = () => {
	const { username } = useParams()
	const user = useSelector((state) => state.users.filter((u) => u.username === username)[0])
	const posts = useSelector((state) => state.posts.filter((post) => post.added_by === user.id).reverse())
	const loggedInUser = useSelector((state) => state.loggedUser)

	return (
		<div className="profile">
			<Profile user={user} />
			<div className="post-column main">
				{loggedInUser.id === user.id && <PostForm btnText={"Post"} placeholder={`What's on your mind?`} />}
				{posts.length !== 0 ? <PostList posts={posts} /> : <div className="card">No posts yet!!</div>}
			</div>
		</div>
	)
}

export default User
