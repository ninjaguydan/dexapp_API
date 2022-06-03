import React from "react"
import user_icon from "../../media/0.png"
import dex_icon_w from "../../media/dex-icon-w.svg"

const UserMenuMobile = () => {
	return (
		<div className="mobile-nav-slider">
			<img src={user_icon} alt="" className="user-img" />
			<p className="bold">Daniel Thompson</p>
			<p className="username">danboy</p>

			<div className="follow-cnt">
				<p>
					<span className="bold">10</span> Following
				</p>
				<p>
					<span className="bold">9</span> Followers
				</p>
			</div>
			<nav>
				<ul>
					<li>
						<a href="/">
							<i className="material-icons">account_circle</i>Profile
						</a>
					</li>
					<li>
						<a href="/">
							<img src={dex_icon_w} alt="dexapp icon" /> Pokedex
						</a>
					</li>
					<li>
						<a href="/">
							<i className="material-icons">home</i>Home
						</a>
					</li>
					<hr />
					<li>
						<a href="/">Logout</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default UserMenuMobile
