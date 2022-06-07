import { Link } from "react-router-dom"
import getImageByKey from "../../Helpers/getImageByKey"

function UserIcon({ userImg, userName, userColor }) {
	return (
		<Link to={`/profile/${userName}`}>
			<img src={getImageByKey(userImg)} alt={"user profile"} className={userColor} />
		</Link>
	)
}

export default UserIcon
