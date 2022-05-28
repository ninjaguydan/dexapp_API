function validateName(value) {
	if (value) {
		if (value.trim().length < 2) {
			return "Name must be at least 2 characters"
		} else if (value.trim().length > 30) {
			return "Name can't be more than 30 characters"
		} else {
			return ""
		}
	} else {
		return "Name field is empty"
	}
}
function validateUsername(value) {
	if (value) {
		if (value.trim().length < 5) {
			return "Username must be at least 5 characters"
		} else if (value.trim().length > 15) {
			return "Name can't be more than 15 characters"
		} else {
			return ""
		}
	} else {
		return "Username field is empty"
	}
}
function validateEmail(value) {
	const regex = RegExp(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)
	if (value) {
		if (!regex.test(value)) {
			return "Invalid email address"
		} else {
			return ""
		}
	} else {
		return "Email field is empty"
	}
}
function validatePassword(value) {
	if (value) {
		if (value.length < 8) {
			return "Password must be at least 8 characters"
		} else if (value.length > 16) {
			return "Password can't be more than 16 characters"
		} else {
			return ""
		}
	} else {
		return "Password field is empty"
	}
}
function confirmPasswordMatch(value1, value2) {
	if (value1) {
		if (value1 !== value2) {
			return "Passwords do not match"
		} else {
			return ""
		}
	} else {
		return "Please confirm password"
	}
}

export function validator(name, value) {
	let errors = {}
	if (name === "name") {
		errors[name] = validateName(value)
	}
	if (name === "username") {
		errors[name] = validateUsername(value)
	}
	if (name === "email") {
		errors[name] = validateEmail(value)
	}
	if (name === "password") {
		errors[name] = validatePassword(value)
	}
	if (name === "confirm") {
		console.log(arguments)
		errors[name] = confirmPasswordMatch(value, arguments[2])
	}
	return errors
}
export function checkIfErrors(object) {
	return Object.keys(object).length === 0
}
export function checkIfValues(object) {
	let values = Object.values(object)
	return values.every((x) => x !== null && x !== "")
}
// 	name: validateName(object.name),
// 	username: validateUsername(object.username),
// 	email: validateEmail(object.email),
// 	password: validatePassword(object.password),
// 	confirm: confirmPasswordMatch(object.confirm, object.password),
// }
