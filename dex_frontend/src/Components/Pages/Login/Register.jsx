import FormInput from "../../Forms/FormInput"
import { user } from "../../../Data/Models"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { validator, checkIfValues, checkIfEmpty } from "../../../Helpers/Validator"
import pk_ball from "../../../media/pokeball.png"

const Register = () => {
	const [values, setValues] = useState({
		name: "",
		username: "",
		password: "",
		confirm: "",
	})
	const [errors, setErrors] = useState(values)

	const handleChange = (event) => {
		setValues({ ...values, [event.target.id]: event.target.value })
	}
	useEffect(() => {
		setErrors({ ...errors, ...validator(values) })
	}, [values])

	return (
		<div className="log-res-wrapper">
			<div className="login-registration">
				<h2 className="header1">Register</h2>
				<hr />
				<form>
					<FormInput label="Name" name="name" value={values.name} handleChange={handleChange} error={errors.name} />
					<FormInput label="Username" name="username" value={values.username} handleChange={handleChange} error={errors.username} />
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={values.password}
						handleChange={handleChange}
						error={errors.password}
					/>
					<FormInput
						label="Confirm Password"
						name="confirm"
						type="password"
						value={values.confirm}
						handleChange={handleChange}
						error={errors.confirm}
					/>
					<div className="btn-container">
						<button className="btn primary" disabled={checkIfEmpty(errors) && checkIfValues(values) ? "" : "disabled"}>
							Sign Up
						</button>
						<Link to="/login" className="btn secondary">
							Log In
						</Link>
					</div>
				</form>
			</div>
			<div className="tag-line">
				<h2 className="header1">
					Join a vast community of <span className="bold">Pokemon Trainers</span> from all over the world!
				</h2>
				<img src={pk_ball} alt="7 Pokeballs bunched together" />
			</div>
		</div>
	)
}

export default Register
