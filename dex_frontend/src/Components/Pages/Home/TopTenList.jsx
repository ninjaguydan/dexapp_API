import React from "react"
import { Link } from "react-router-dom"
import { FaStar, FaHeart } from "react-icons/fa"

function TopTenList() {
	const arr = [...Array(10).keys()]

	return (
		<ol className="card list-group" id="style-4">
			<li className="list-group-item">
				<h5 className="bold header1">Top 10</h5>
			</li>
			{arr.map((item, index) => {
				return (
					<li className="list-group-item" key={index + 1}>
						<Link to={`/pokemon/`}>
							<img
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
									index + 1
								}.png`}
								alt="{{pokemon.name}}'s official art"
							/>
							<div className="info">
								<h6 className="bold">Fletchinder</h6>
								<div className="icon-group">
									<p>
										<FaHeart /> 1.2k
									</p>
									<p>
										<FaStar /> 10
									</p>
								</div>
							</div>
						</Link>
					</li>
				)
			})}
		</ol>
	)
}

export default TopTenList
