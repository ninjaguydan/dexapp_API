import React from 'react'

const Input = (props) => { //props = { label, name, type, value, error, class }

	return (
		<div className="form-row">
			<label htmlFor={props.name}>{props.label}</label>
			<div>
				<input 
					type={props.type || "text"} 
					name={props.name} 
					id={props.name} 
					className={'form-control ' + props.className} 
					placeholder={props.label}
					value={props.value} 
					onChange={(e) => props.handleChange(e)}
				/>
				{props.error ? <small className="error">{props.error}</small>
				: null}
				{ props.value && !props.error ? <i className="material-icons success">check_circle</i>
				: null }
				
			</div>
		</div>
	)
}

export default Input
