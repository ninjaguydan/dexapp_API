import React from 'react'
import pkmn from '../../media/default/pkmn.png'
import Input from '../buttons/Input'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className="wrapper">
			<div className="log-wrapper">
				<div className="logres">
					<h2>Login</h2>
					<hr/>

					<form action="/login/user_login" method="POST" id="login">
						<Input label="Email" name="email" type="email" />
						<Input label="Password" name="password" type="password" />
						<div className="btn-container">
							<button className="btn btn-primary">Log In</button>
							<Link className="btn btn-secondary" to="/register">Create New Account</Link>
							<Link to="" className="reset-pw">Forgot my password</Link>
						</div>
					</form>
				</div>
				<br/><br/><br/>
				<div class="tag">
					<h3 style={{"text-align": "center"}}>Welcome back!</h3>
					<img src={pkmn} alt="trainer with 6 pokemon"/>
				</div>
			</div>
		</div>
	)
}

export default Login
