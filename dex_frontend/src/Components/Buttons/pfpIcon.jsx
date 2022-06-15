import React from "react"

const pfpIcon = () => {
	return (
		<button className={`${formData.user_img === "m1" && "selected"}`}>
			<img src={getImageByKey("m1")} />
		</button>
	)
}

export default pfpIcon
