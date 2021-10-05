import React, { useEffect, useState } from 'react'
import { titleCase } from '../Helpers.js/Helper'
import img from '../../media/default/0.png'

const PostForm = (props) => {

	let content_cnt
	if ( props.type == "review" ) {
		content_cnt = props.values.review.length
	} else if ( props.type == "post" ) {
		content_cnt = props.values.post.length
	}


	useEffect(() => {
		let counter = document.querySelector('.counter')
		let limit = 255
		limit -= content_cnt
		counter.innerHTML = limit + "/255"
		if ( limit < 100 ) {
			counter.classList.add('warning')
		} else {
			counter.classList.remove('warning')
		}
	}, [props.values])

	return (
		<div className="card">
			<img src={img} alt="profile image" className="card-item user-img form-post-img gray" />
			<form>
				<textarea 
					className="form-control form-control-custom" 
					name={ props.type }
					rows="2"
					value={props.values.review}
					onChange={(e) => props.handleChange(e)}
					placeholder={ props.pkmn ? `What do you think of ${ titleCase(props.pkmn)}?` : "What's on your mind?"}>
				</textarea>
				<small className="counter review-counter">255/255</small>
				<div className="btn-container" style={ props.type == "post" ? {"display":"inherit"} : null } >
					{ props.type == "review" ? <div className="form-row">
									<label>Rating</label>
									<select name="rating"  className="form-control form-control-custom" onChange={(e) => props.handleChange(e)} value={props.values.rating}>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
									</select>
								</div>
					: null }
					
					<button className="btn btn-primary btn-post" disabled>Post</button>
				</div>
			</form>
		</div>
	)
}

export default PostForm
