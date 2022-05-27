import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css" //npm install bootstrap
import "./css/Reset.css"
import "./css/Style.css"
import "./css/Login-Registration.css"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("dexapp")
)
