import dfault from "../../media/0.png"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const empty = {
	id: uuidv4(),
	content: "",
	rating: 1,
}

function PostForm({ review = false, btnText, placeholder }) {
	const [counter, setCounter] = useState(0)
	const [formData, setFormData] = useState(empty)

	function setValue(event) {
		setFormData({ ...formData, [event.target.id]: event.target.value })
	}
	function enableButton() {
		if (counter > 1 && counter < 141) {
			return true
		} else {
			return false
		}
	}

	useEffect(() => {
		setCounter(formData.content.length)
	}, [formData.content])

	return (
		<div className="card">
			<img src={dfault} alt={"user"} />
			<form>
				<textarea
					onChange={(e) => setValue(e)}
					value={formData.content}
					id="content"
					className="form-control form-control-custom"
					rows={2}
					placeholder={placeholder}
				></textarea>
				{review && (
					<select className="form-control-custom" id="rating" value={formData.rating} onChange={(e) => setValue(e)}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
				)}
				<button className="btn primary" disabled={enableButton() ? "" : "disabled"}>
					{btnText}
				</button>
				<span className={`counter ${counter > 140 && "error"} ${counter > 100 && "caution"}`}>{counter}/140</span>
			</form>
		</div>
	)
}

export default PostForm
