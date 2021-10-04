import React from 'react'
import dex_icon from '../media/default/dex-icon.svg'

const MobileNav = ({ searchBtn }) => {

	return (
		<>
			<ul className="mobile-nav">
				<li>{searchBtn}</li>
				
				{/* {% if request.session.userid %}
				<li>
				<a href="/profile/messages"><i class="material-icons">mail</i></a>
				{% if user.profile.msg_counter != 0 %}
				<div class="notification">{{user.profile.msg_counter}}</div>
				{% endif %}
				</li>
				<li>
					<i class="material-icons nav-icon bell">notifications</i>
					<div class="notification">3</div>
				</li>
				<li><a href="/profile/1"><img src="{{user.user_img.url}}" alt="profile pic" class="user-img {{user.bg_color}}"></a></li> */}
				
				<li><a href="/"><i className="material-icons">home</i></a></li>
				<li><a href="/dex"><img src={dex_icon} alt="Pokedex" /></a></li>
				<li><a href="/login/"><i className="material-icons">account_circle</i></a></li>
			</ul>
		</>
	)
}

export default MobileNav
