import React, {useState, useEffect} from 'react'
import User from '../components/User'

const UserListPage = () => {

	let [users, setUsers] = useState([])

	useEffect(() => {
		getUsers()
	}, [])

	let getUsers = async () => {
		let response = await fetch('http://localhost:8000/api/users/')
		let data = await response.json()
		console.log('DATA:', data)
		setUsers(data)
	}

	return (
		<div>
			<div>
				{users.map((user, index) => (
					<User key={index} user={user} />
				))}
			</div>
		</div>
	)
}

export default UserListPage
