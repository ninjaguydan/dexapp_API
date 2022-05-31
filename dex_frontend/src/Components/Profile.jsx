import React from "react"
import { Link } from "react-router-dom"

const Profile = ({ pokemon }) => {
	return (
		<ul>
			<li>
				<h2>Pokemon Name</h2>
				<p>#000</p>
				<img src={""} alt="Pokemon official artwork" />
				<div>
					<p> heart 00</p>
					<p> star 00</p>
				</div>
			</li>
			<li>
				<p>Type 1</p>
				<p>Type 2</p>
			</li>
			<li>
				<h3>Base Stat Total</h3>
				<p>000</p>
			</li>
			<li>
				<h3>HP</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Attack</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Defense</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Special Attack</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Special Defense</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Speed</h3>
				<p>00</p>
			</li>
			<li>
				<h3>Reviews</h3>
				<p>000</p>
			</li>
			<li>
				<p>Featured on 0 Teams!</p>
			</li>
			<li>
				<button>Add to Team</button>
				<button>Favorite</button>
			</li>
			<li>
				<Link to="">Prev</Link>
				<Link to="">Next</Link>
			</li>
		</ul>
	)
}

export default Profile
