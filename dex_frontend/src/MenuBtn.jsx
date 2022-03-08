import React from "react"

const MenuBtn = ({ menuIsOpen, openMenu }) => {
	return (
		<button id="menu-btn" className={menuIsOpen ? "menu-btn open" : "menu-btn"} onClick={openMenu}>
			<div class="menu-btn_burger"></div>
		</button>
	)
}

export default MenuBtn
