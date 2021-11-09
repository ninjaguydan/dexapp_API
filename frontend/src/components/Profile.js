import React from 'react'
import { makeHundreds, titleCase, getTotal } from './Helpers.js/Helper'
import { Link } from 'react-router-dom'

const Profile = ({ pokemon }) => {

	let prev = pokemon.id - 1 
	if (prev === 0) {
		prev = 898
	}
	
	let nxt = pokemon.id + 1
	if (nxt === 899) {
		nxt = 1
	}

	let statArr = [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.sp_attack, pokemon.sp_defense, pokemon.speed]


	return (
		<ul className="list-group">
			<li className="list-group-item pkmn">
				<h4>{ titleCase(pokemon.name) }</h4>
				<h6>#{ makeHundreds(pokemon.id) }</h6>
				<img src={pokemon.art_url} alt={`${pokemon.name}'s official artwork`} />
				{/*  Rankings/ Favorites */}
				<div className="icons">
					<h5 className="bold"><i className="material-icons">favorite</i> {pokemon.favorited_by.length}</h5>
					<h5 className="bold"><i className="material-icons">star</i> [00] </h5>
				</div>
			</li>
			<li className="list-group-item types bold">
				{pokemon.types.map(type => {
					return <span className={`type ${type.toLowerCase()}`}>{type}</span>
				})}
				
			</li>
			<li className="list-group-item striped">
				<p className="bold">Base Stat Total</p>
				<span>{ getTotal(statArr) }</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">HP</p>
				<span>{pokemon.hp}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Attack</p>
				<span>{pokemon.attack}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Defense</p>
				<span>{pokemon.defense}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Special Attack</p>
				<span>{pokemon.sp_attack}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Special Defense</p>
				<span>{pokemon.sp_defense}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Speed</p>
				<span>{pokemon.speed}</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Reviews</p>
				<span>[0]</span>
			</li>
			<li className="list-group-item striped">
				<p className="bold">Featured on [0] team[pluralize]!</p>
			</li>
			<li className="list-group-item striped btn-stacked">

				{/* <button className="btn btn-secondary" id="add-to-team"><i className="material-icons">add</i> Add to Team</button> */}

				{/* Add Pokemon to favorites if user has not favorited */}
				{/* <form action="/favorite" method="POST">

					<input type="hidden" name="pokemon" value="pokemon.id" />
					<button className="btn btn-secondary"><i className="material-icons">favorite_border</i> Favorite</button>
				</form> */}
		
				{/*  Remove Pokemon from favorites */}
				{/* <form action="/favorite" method="POST">

					<input type="hidden" name="pokemon" value="pokemon.id" />
					<button className="btn btn-secondary active"><i className="material-icons">favorite</i> Unfavorite</button>
				</form> */}

				<p className="bold">Log in to create a team!</p>

			</li>
			<li className="list-group-item striped">
				<div className="pokenav">
					<Link to={`/pkmn/${prev}`}>
						<i className="material-icons">arrow_back</i>
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prev}.png`} alt="previous pokemon's sprite" />
					</Link>
				</div>
				<div className="pokenav">
					<Link to={`/pkmn/${nxt}`}>
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nxt}.png`} alt="next pokemon's sprite" />
						<i className="material-icons">arrow_forward</i>
					</Link>
				</div>
			</li>
		</ul>
	)
}

export default Profile
