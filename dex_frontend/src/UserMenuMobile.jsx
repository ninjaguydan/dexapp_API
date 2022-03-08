import React from "react"

const UserMenuMobile = () => {
	return (
		<div class="mobile-nav-slider">
			<img src="" alt="" class="" />
			<p class="bold">Daniel Thompson</p>
			<span class="username">danboy</span>
			<br />
			<div class="follow-cnt">
				<p>
					<span class="bold">10</span> Following
				</p>
				<p>
					<span class="bold">9</span> Followers
				</p>
			</div>
			<ul>
				<li>
					<a href="/">
						<i class="material-icons">account_circle</i>Profile
					</a>
				</li>
				<li>
					<a href="/">
						<img src="" alt="dexapp icon" /> Pokedex
					</a>
				</li>
				<li>
					<a href="/">
						<i class="material-icons">home</i>Home
					</a>
				</li>
				<hr />
				<li>
					<a href="/">Logout</a>
				</li>
			</ul>
		</div>
	)
}

export default UserMenuMobile
