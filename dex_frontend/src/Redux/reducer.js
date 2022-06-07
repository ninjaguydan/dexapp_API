const initState = {
	loggedUser: false,
	users: [
		{ id: 1, name: "Daniel Thompson", username: "danboy", password: "password", user_img: "m1", bg_color: "red" },
		{ id: 2, name: "John Doe", username: "longjonsilver", password: "1234", user_img: "m2", bg_color: "green" },
	],
	menuIsOpen: false,
}

function reducer(state = initState, action) {
	switch (action.type) {
		case "users/ON_LOGIN":
			return {
				...state,
				loggedUser: {
					...action.logUser[0],
				},
			}
		case "users/ON_LOGOUT":
			return {
				...state,
				loggedUser: false,
			}
		case "users/REGISTER":
			return {
				...state,
				loggedUser: { ...action.newUser },
				users: [...state.users, action.newUser],
			}
		case "users/MENU_TOGGLE":
			return {
				...state,
				menuIsOpen: !state.menuIsOpen,
			}
		default:
			return state
	}
}

export default reducer
