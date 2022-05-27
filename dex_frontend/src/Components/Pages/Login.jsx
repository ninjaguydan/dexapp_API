import { Link } from "react-router-dom"
import pkmn_img from "../../media/pkmn.png"

const Login = () => {
	return (
		<div className="log-res-wrapper">
			<div className="login-registration">
				<h2 className="header1">Login</h2>
				<hr />
				<strong>Email or password does not match our records</strong>
				<form>
					<div className="form-row">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" className="form-control" />
					</div>
					<div className="form-row">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" className="form-control" />
					</div>
					<div className="btn-container">
						<button className="btn primary">Log In</button>
						<Link to="/register" className="btn secondary">
							Create New Account
						</Link>
					</div>
				</form>
			</div>
			<div className="tag-line">
				<h2 className="header1">Welcome Back!</h2>
				<img src={pkmn_img} alt="pokemon trainer with 6 pokemon" />
			</div>
		</div>
	)
}

export default Login
