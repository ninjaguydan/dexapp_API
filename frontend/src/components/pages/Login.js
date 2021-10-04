import React, { useState } from 'react'
import pkmn from '../../media/default/pkmn.png'
import Input from '../buttons/Input'
import { Link } from 'react-router-dom'

const Login = () => {

	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		const {name, value} = e.target
		setValues({...values,[name]: value})
	}

	return (
		<main className="wrapper">
			<div className="log-wrapper">
				<div className="logres">
					<h2>Login</h2>
					<hr/>

					<form id="login">
						<Input label="Email" name="email" type="email" value={values.email} handleChange={handleChange} error="" />
						<Input label="Password" name="password" type="password" value={values.password} handleChange={handleChange} error="" />
						<div className="btn-container">
							<button className="btn btn-primary">Log In</button>
							<Link className="btn btn-secondary" to="/register">Create New Account</Link>
							<Link to="" className="reset-pw">Forgot my password</Link>
						</div>
					</form>
				</div>
				<br/><br/><br/>
				<div className="tag">
					<h3 style={{"text-align": "center"}}>Welcome back!</h3>
					<img src={pkmn} alt="trainer with 6 pokemon"/>
				</div>
			</div>
		</main>
	)
}

export default Login
