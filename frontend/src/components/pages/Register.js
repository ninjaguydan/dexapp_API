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
		// name: 'Field required',
		// username: '',
		// email: '',
		// password: '',
		// confirm: ''
	})
	const handleChange = (e) => {
		const {name, value} = e.target
		setValues({...values,[name]: value})
		// setErrors(validator(values));
		
	}
	const validator = (values) => {
		let errors = {}
		//Name Validator
		if (values.name && values.name.trim().length < 2) {
			errors.name = "Name must be at least 2 characters"
		} else if (values.name.trim().length > 30) {
			errors.name = "Name can't be more than 30 characters"
		}
		return errors
	}
	useEffect(() => {
		setErrors(validator(values));
		// console.log(values)
	},[values])
	
	console.log(errors)
	return (
		<div className="wrapper">
			<div className="log-wrapper">
				<div className="logres">
					<h2>Register</h2>
					<hr/>
					<form id="registration">
						<Input label="Name" name="name" value={values.name} handleChange={handleChange} error={errors.name} />
						<Input label="Username" name="username" />
						<Input label="Email" name="email" type="email" error="" />
						<Input label="Password" name="password" type="password" />
						<Input label="Confirm Password" name="confirm" type="password" className="confirm" error="" />
						<div className="btn-container">
							<button className="btn btn-primary" disabled={errors}>Sign up</button>
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
