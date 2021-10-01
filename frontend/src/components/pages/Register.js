import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import pokeballs from '../../media/default/pokeball.png'
import Input from '../buttons/Input'

const Register = () => {

	const [values, setValues] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		confirm: ''
	})
	const [errors, setErrors] = useState({

	})
	const handleChange = (e) => {
		const {name, value} = e.target
		setValues({...values,[name]: value})
	}
	const validator = (values) => {
		let errors = {}
		//Name Validator
		if (values.name && values.name.trim().length < 2) {
			errors.name = "Name must be at least 2 characters"
		} else if (values.name.trim().length > 30) {
			errors.name = "Name can't be more than 30 characters"
		}

		//Username Validator
		if (values.username && values.username.trim().length < 5) {
			errors.username = "Username must be at least 5 characters"
		} else if (values.name.trim().length > 15) {
			errors.name = "Name can't be more than 15 characters"
		}

		//Email validator
		const regex = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
		if (values.email && !regex.test(values.email) ) {
			errors.email = "Invalid email address"
		} 

		//Password Validator
		if (values.password && values.password.length < 8) {
			errors.password = "Password must be at least 8 characters"
		} else if (values.password.length > 16) {
			errors.password = "Password can't be more than 16 characters"
		}

		if (values.confirm && values.confirm !== values.password ) {
			errors.confirm = "Passwords do not match"
		}


		return errors
	}
	
	const checkIfErrors = (obj) => {
		return Object.keys(obj).length === 0
	}
	const checkIfValues = (obj) => {
		let values = Object.values(obj)
		// return !values.some((x) => x !== null && x !== '')
		return values.every((x) => x !== null && x !== '')
	}

	useEffect(() => {
		setErrors(validator(values));
	},[values])
	
	return (
		<div className="wrapper">
			<div className="log-wrapper">
				<div className="logres">
					<h2>Register</h2>
					<hr/>
					<form id="registration">
						<Input label="Name" name="name" value={values.name} handleChange={handleChange} error={errors.name} />
						<Input label="Username" name="username" value={values.username} handleChange={handleChange} error={errors.username} />
						<Input label="Email" name="email" type="email" value={values.email} handleChange={handleChange} error={errors.email} />
						<Input label="Password" name="password" type="password" value={values.password} handleChange={handleChange} error={errors.password} />
						<Input label="Confirm Password" name="confirm" type="password" className="confirm" value={values.confirm} handleChange={handleChange} error={errors.confirm} />
						<div className="btn-container">
							<button className="btn btn-primary" disabled={ checkIfErrors(errors) && checkIfValues(values) ? "" : "disabled"}>Sign up</button>
							<Link className="btn btn-secondary" to="/login">Log in</Link>
						</div>
					</form>
				</div>
				<br/><br/><br/>
				<div className="tag">
					<h3>Join a vast community of <span>Pokemon Trainers</span> from all over the world!</h3>
					<img src={pokeballs} alt="assortment of 7 pokeballs"/>
				</div>
			</div>
			
		</div>
	)
}

export default Register
