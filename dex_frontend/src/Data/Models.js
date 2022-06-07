import { v4 as uuidv4 } from "uuid"

export const user = {
	id: "",
	name: "",
	username: "",
	password: "",
	created: new Date(),
	user_img: "dfault",
	bg_color: "gray",
}
export const post = {
	id: uuidv4(),
	content: "",
	likes: [],
	added_by: null,
	created: "",
}
export const review = {
	id: uuidv4(),
	pkmn: null,
	content: "",
	rating: 1,
	likes: [],
	added_by: null,
	created: "",
}
export const team = {
	id: uuidv4(),
	name: "",
	members: [],
	likes: [],
	added_by: null,
	created: "",
}
export const replies = {
	id: uuidv4(),
	content: "",
	post: null,
	review: null,
	team: null,
	likes: [],
	added_by: null,
	created: "",
}
