import React from 'react'

const Input = (props) => { //props = { label, name, type, errMin, errMax, error, class }

	return (
		<div className="form-row">
			<label for={props.name}>{props.label}</label>
			<div>
				<input type={props.type || "text"} name={props.name} id={props.name} className={'form-control ' + props.class} />
				{props.errMax ? <small class="error">{props.label} can't be more than {props.errMax} characters.</small>
				: null}
				{props.errMin ? <small class="error2">{props.label} must be at least {props.errMin} characters.</small>
				: null}
				{props.error ? <small class="error">{props.error}</small>
				: null}
				<i class="material-icons success">check_circle</i>
			</div>
		</div>
	)
}

export default Input
