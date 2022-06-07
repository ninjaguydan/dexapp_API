import { useState } from "react"
import { Link } from "react-router-dom"
import pkmn_img from "../../../media/pkmn.png"
import FormInput from "../../Forms/FormInput"
import { useDispatch } from "react-redux"

const Login = () => {
	const dispatch = useDispatch()
	const [creds, setCreds] = useState({
		username: "",
		password: "",
	})
	const [error, setError] = useState(false)
	const handleChange = (event) => {
		setCreds({ ...creds, [event.target.id]: event.target.value })
	}
	function onSubmit(event) {
		event.preventDefault()
		dispatch({
			type: "users/ON_LOGIN",
			creds,
		})
	}

	return (
		<div className="log-res-wrapper">
			<div className="login-registration">
				<h2 className="header1">Login</h2>
				<hr />
				{error && <strong className="error">Email or password does not match our records</strong>}
				<form onSubmit={(e) => onSubmit(e)}>
					<FormInput label="Username" name="username" value={creds.username} handleChange={handleChange} />
					<FormInput label="Password" name="password" value={creds.password} handleChange={handleChange} type="password" />
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
