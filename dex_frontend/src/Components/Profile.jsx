import { useEffect } from "react"
import default_img from "../media/0.png"
import "../css/Pkmn_types.css"
import { Link } from "react-router-dom"
import { makeHundreds, getBaseStatTotal } from "../Helpers/Helpers"
import { FaStar, FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Profile = ({ pokemon }) => {
	const stats = [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.sp_attack, pokemon.sp_defense, pokemon.speed]

	let prev
	let next
	pokemon.id === 1 ? (prev = 898) : (prev = pokemon.id - 1)
	pokemon.id === 898 ? (next = 1) : (next = pokemon.id + 1)

	function setImage(event) {
		event.target.src = default_img
	}

	return (
		<ul className="card">
			<li className="list-group-item">
				<h2 className="header1">{pokemon.name}</h2>
				<p>#{makeHundreds(pokemon.id)}</p>
				<img src={pokemon.art_url} alt={`${pokemon.name}'s official artwork`} className="main-img" />
				<div className="icon-group">
					<p>
						<FaHeart /> 00
					</p>
					<p>
						<FaStar /> 00
					</p>
				</div>
			</li>
			<li className="list-group-item type-group bold">
				{pokemon.types.map((type) => {
					return (
						<p key={type} className={`type ${type.toLowerCase()}`}>
							{type}
						</p>
					)
				})}
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Base Stat Total</h3>
				<p>{getBaseStatTotal(stats)}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">HP</h3>
				<p>{pokemon.hp}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Attack</h3>
				<p>{pokemon.attack}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Defense</h3>
				<p>{pokemon.defense}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Special Attack</h3>
				<p>{pokemon.sp_attack}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Special Defense</h3>
				<p>{pokemon.defense}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Speed</h3>
				<p>{pokemon.speed}</p>
			</li>
			<li className="list-group-item striped">
				<h3 className="bold">Reviews</h3>
				<p>00</p>
			</li>
			<li className="list-group-item striped" style={{ justifyContent: "center" }}>
				<p className="bold">Featured on 0 Teams!</p>
			</li>
			<li className="list-group-item striped">
				<button className="btn secondary">
					<FaHeart /> Add to Team
				</button>
				<button className="btn secondary">
					<FaStar /> Favorite
				</button>
			</li>
			<li className="list-group-item striped">
				<Link to={`/pokemon/${prev}`} className="pokenav">
					<FaArrowLeft />
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prev}.png`}
						onError={(e) => {
							setImage(e)
						}}
					/>
				</Link>
				<Link to={`/pokemon/${next}`} className="pokenav">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${next}.png`}
						onError={(e) => {
							setImage(e)
						}}
					/>
					<FaArrowRight />
				</Link>
			</li>
		</ul>
	)
}

export default Profile
