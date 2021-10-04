import React from 'react'
import { Link } from 'react-router-dom'
import { titleCase, makeHundreds } from '../Helpers.js/Helper'

const ResultCard = (props) => {



	return (
		<Link to={`/pkmn/${props.id}`} key={props.id}>
			<div className="card">
				<small>#{makeHundreds(props.id)}</small>
				<img src={props.art_url} alt={`${props.name}'s official artwork`} />
				<h6>{titleCase(props.name)}</h6>
			</div>
			
		</Link>
	)
}

export default ResultCard
