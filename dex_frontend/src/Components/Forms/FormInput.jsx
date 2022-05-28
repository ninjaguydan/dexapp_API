import React from "react"
import { FaCheckCircle } from "react-icons/fa"

const FormInput = ({ label, name, type = "text", value, handleChange, handleBlur, error }) => {
	return (
		<div className="form-row">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				className="form-control"
				placeholder={label}
				value={value}
				onChange={(e) => {
					handleChange(e)
				}}
				onBlur={(e) => {
					handleBlur(e)
				}}
			/>
			{error && <strong className="error">{error}</strong>}
			{!error && value ? <FaCheckCircle className="success" /> : null}
		</div>
	)
}

export default FormInput
