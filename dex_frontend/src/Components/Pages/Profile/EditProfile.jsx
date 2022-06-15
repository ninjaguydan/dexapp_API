import { useState } from "react"
import FormInput from "../../Forms/FormInput"
import getImageByKey from "../../../Helpers/getImageByKey"
import { useSelector } from "react-redux"

function EditProfile() {
	const user = useSelector((state) => state.loggedUser)
	const [formData, setFormData] = useState({
		name: user.name,
		location: user?.location,
		bio: user?.bio,
		user_img: user.user_img,
		bg_color: user.bg_color,
	})

	// function handleClick(fileName) {
	// 	setFormData({
	// 		...formData,
	// 	})
	// }

	return (
		<div className="modal-bg">
			<div className="edit-profile-modal">
				<div className="modal-head">
					<h2 className="header1">Edit Profile</h2>
					<button className="close">&#10005;</button>
				</div>
				<hr />
				<form>
					<FormInput name="name" label="Name" value={formData.name} error={true} />
					<FormInput name="location" label="Location" value={formData.location} error={true} />
					<FormInput name="bio" label="Bio" textArea={true} value={formData.bio} error={true} />
					<hr />
					<h3>Choose profile photo</h3>
					<div className="img-container">
						<button type="button" onClick={(event) => console.log(event)} className={`${formData.user_img === "m1" && "selected"}`}>
							<img src={getImageByKey("m1")} />
						</button>
						<button className={`${formData.user_img === "m4" && "selected"}`}>
							<img src={getImageByKey("m4")} />
						</button>
						<button className={`${formData.user_img === "m2" && "selected"}`}>
							<img src={getImageByKey("m2")} />
						</button>
						<button>
							<img src={getImageByKey("m3")} />
						</button>
						<button>
							<img src={getImageByKey("f1")} />
						</button>
						<button>
							<img src={getImageByKey("f4")} />
						</button>
						<button>
							<img src={getImageByKey("f2")} />
						</button>
						<button>
							<img src={getImageByKey("f3")} />
						</button>
					</div>
					<hr />
					<h3>Choose background color</h3>
					<div className="img-container colors">
						<button className="gray"></button>
						<button className="red"></button>
						<button className="blue"></button>
						<button className="green"></button>
						<button className="yellow"></button>
						<button className="purple"></button>
					</div>
					<hr />
					<br />
					<button className="btn primary">Update</button>
				</form>
				<button className="btn secondary btn-del">Delete Profile</button>
			</div>
		</div>
	)
}

export default EditProfile
