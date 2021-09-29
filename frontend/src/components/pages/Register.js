import React from 'react'
import { Link } from 'react-router-dom'
import pokeballs from '../../media/default/pokeball.png'
import Input from '../buttons/Input'

const Register = () => {
	return (
		<div className="wrapper">
			<div className="log-wrapper">
				<div class="logres">
					<h2>Register</h2>
					<hr/>
					<form action="/login/signup" method="POST" id="registration" class="needs-validation">
						<Input label="Name" name="name" errMax={50} errMin={2} />
						<Input label="Username" name="username" errMax={13} errMin={5} />
						<Input label="Email" name="email" type="email" error="Must enter a valid email address." />
						<Input label="Password" name="password" type="password" errMax={16} errMin={8} />
						<Input label="Confirm Password" name="confirm" type="password" class="confirm" error="Passwords do not match." />
						<div class="btn-container">
							<button class="btn btn-primary" disabled>Sign up</button>
							<Link class="btn btn-secondary" to="/login">Log in</Link>
						</div>
					</form>
				</div>
				<br/><br/><br/>
				<div class="tag">
					<h3>Join a vast community of <span>Pokemon Trainers</span> from all over the world!</h3>
					<img src={pokeballs} alt="assortment of 7 pokeballs"/>
				</div>
			</div>
			
		</div>
	)
}

export default Register
