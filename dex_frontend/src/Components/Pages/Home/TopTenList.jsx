import React from "react"
import { Link } from "react-router-dom"
import { FaStar, FaHeart } from "react-icons/fa"
import usePokemon from "../../../Helpers/usePokemon"
import Loading from "../../Loader/Loading"

function TopTenList() {
	// const { data, isLoading } = usePokemon()

	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min)
	}
	let arr = []
	while (arr.length < 10) {
		arr.push(getRandomInt(1, 899))
	}

	// if (isLoading) {
	// 	return <Loading />
	// }

	return (
		<ol className="card list-group" id="style-4">
			<li className="list-group-item">
				<h5 className="bold header1">Top 10</h5>
			</li>
			{arr.map((item, index) => {
				return (
					<li className="list-group-item" key={item}>
						<Link to={`/pokemon/${item}`}>
							<img
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item}.png`}
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
