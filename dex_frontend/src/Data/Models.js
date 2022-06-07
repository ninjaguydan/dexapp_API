import { v4 as uuidv4 } from "uuid"

const user = {
	id: uuidv4(),
	name: "",
	username: "",
	password: "",
	created: "",
	user_img: "/default/0.png",
	bg_color: "",
}
const post = {
	id: uuidv4(),
	content: "",
	likes: [],
	added_by: null,
	created: "",
}
const review = {
	id: uuidv4(),
	pkmn: null,
	content: "",
	rating: 1,
	likes: [],
	added_by: null,
	created: "",
}
const team = {
	id: uuidv4(),
	name: "",
	members: [],
	likes: [],
	added_by: null,
	created: "",
}
const replies = {
	id: uuidv4(),
	content: "",
	post: null,
	review: null,
	team: null,
	likes: [],
	added_by: null,
	created: "",
}
