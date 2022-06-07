const initState = {
	loggedUser: false,
	users: [
		{ id: 1, name: "Daniel Thompson", username: "danboy", password: "password", user_img: "m1", bg_color: "red" },
		{ id: 2, name: "John Doe", username: "longjonsilver", password: "1234", user_img: "m2", bg_color: "green" },
	],
}

function reducer(state = initState, action) {
	switch (action.type) {
		case "users/ON_LOGIN":
			return {
				...state,
				loggedUser: {
					...state.users.filter((user) => user.username === action.creds.username && user.password === action.creds.password)[0],
				},
			}
		case "users/ON_LOGOUT":
			return {
				...state,
				loggedUser: { ...initState.loggedUser },
			}
		default:
			return state
	}
}

export default reducer
