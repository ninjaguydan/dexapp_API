import React from "react"
import "../css/Pkmn_types.css"
import { Link } from "react-router-dom"
import { makeHundreds, getBaseStatTotal } from "../Helpers/Helpers"
import { FaStar, FaHeart } from "react-icons/fa"

const Profile = ({ pokemon }) => {
	const stats = [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.sp_attack, pokemon.sp_defense, pokemon.speed]
	return (
		<ul className="card">
			<li className="list-group-item">
				<h2 className="header1">{pokemon.name}</h2>
				<p>#{makeHundreds(pokemon.id)}</p>
				<img src={pokemon.art_url} alt={`${pokemon.name}'s official artwork`} />
				<div className="icon-group">
					<p>
						<FaHeart /> 00
					</p>
					<p>
						<FaStar /> 00
					</p>
				</div>
			</li>
			<li className="list-group-item type-group">
				{pokemon.types.map((type) => {
					return <p className={`type ${type.toLowerCase()}`}>{type}</p>
				})}
			</li>
			<li className="list-group-item">
				<h3>Base Stat Total</h3>
				<p>{getBaseStatTotal(stats)}</p>
			</li>
			<li className="list-group-item">
				<h3>HP</h3>
				<p>{pokemon.hp}</p>
			</li>
			<li className="list-group-item">
				<h3>Attack</h3>
				<p>{pokemon.attack}</p>
			</li>
			<li className="list-group-item">
				<h3>Defense</h3>
				<p>{pokemon.defense}</p>
			</li>
			<li className="list-group-item">
				<h3>Special Attack</h3>
				<p>{pokemon.sp_attack}</p>
			</li>
			<li className="list-group-item">
				<h3>Special Defense</h3>
				<p>{pokemon.defense}</p>
			</li>
			<li className="list-group-item">
				<h3>Speed</h3>
				<p>{pokemon.speed}</p>
			</li>
			<li className="list-group-item">
				<h3>Reviews</h3>
				<p>00</p>
			</li>
			<li className="list-group-item">
				<p>Featured on 0 Teams!</p>
			</li>
			<li className="list-group-item">
				<button>Add to Team</button>
				<button>Favorite</button>
			</li>
			<li className="list-group-item">
				<Link to="">Prev</Link>
				<Link to="">Next</Link>
			</li>
		</ul>
	)
}

export default Profile
