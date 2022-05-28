import FormInput from "../Forms/FormInput"
import { useState, useEffect } from "react"
import { validator } from "../../Helpers/Validator"

const Register = () => {
	const [values, setValues] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		confirm: "",
	})
	const [errors, setErrors] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		confirm: "",
	})
	const handleChange = (event) => {
		setValues({ ...values, [event.target.id]: event.target.value })
	}
	const handleBlur = (event) => {
		let newError = validator(event.target.id, event.target.value, values.password)
		setErrors({ ...errors, ...newError })
	}

	console.log(values)
	console.log(errors)
	return (
		<div className="log-res-wrapper">
			<div className="login-registration">
				<h2 className="header1">Register</h2>
				<hr />
				<form>
					<FormInput label="Name" name="name" value={values.name} handleChange={handleChange} handleBlur={handleBlur} error={errors.name} />
					<FormInput
						label="Username"
						name="username"
						value={values.username}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.username}
					/>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={values.email}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.email}
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={values.password}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.password}
					/>
					<FormInput
						label="Confirm Password"
						name="confirm"
						type="password"
						value={values.confirm}
						handleChange={handleChange}
						handleBlur={handleBlur}
						error={errors.confirm}
					/>
				</form>
			</div>
		</div>
	)
}

export default Register
