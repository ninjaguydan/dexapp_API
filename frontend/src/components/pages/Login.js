import React from 'react'
import pkmn from '../../media/default/pkmn.png'

const Login = () => {
	return (
		<div className="wrapper">
			<div className="log-wrapper">
				<div className="logres">
					<h2>Login</h2>
					<hr/>

					<form action="/login/user_login" method="POST" id="login">
						<div className="form-row">
							<label for="email">Email</label>
							<div>
							<input type="email" name="email" className="form-control"/>
							</div>
						</div>
						<div class = "form-row">
							<label for="password">Password</label>
							<div>
							<input type="password" name="pw" className="form-control"/>
							</div>
						</div>
						<div className="btn-container">
							<button className="btn btn-primary">Log In</button>
							<a className="btn btn-secondary" href="/login/register">Create New Account</a>
							<a href="" className="reset-pw">Forgot my password</a>
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
