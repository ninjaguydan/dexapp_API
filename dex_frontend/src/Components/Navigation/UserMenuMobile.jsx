import React from "react"
import user_icon from "../../media/0.png"
import dex_icon_w from "../../media/dex-icon-w.svg"

const UserMenuMobile = ({ menuIsOpen }) => {
	return (
		<div class={menuIsOpen ? "mobile-nav-slider" : "mobile-nav-slider hidden"}>
			<img src={user_icon} alt="" class="user-img" />
			<p class="bold">Daniel Thompson</p>
			<p class="username">danboy</p>

			<div class="follow-cnt">
				<p>
					<span class="bold">10</span> Following
				</p>
				<p>
					<span class="bold">9</span> Followers
				</p>
			</div>
			<nav>
				<ul>
					<li>
						<a href="/">
							<i class="material-icons">account_circle</i>Profile
						</a>
					</li>
					<li>
						<a href="/">
							<img src={dex_icon_w} alt="dexapp icon" /> Pokedex
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
			</nav>
		</div>
	)
}

export default UserMenuMobile
