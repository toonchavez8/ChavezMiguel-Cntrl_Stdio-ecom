import PropTypes from "prop-types";

export const InputField = ({
	name,
	placeholder,
	type,
	handleChange,
	value,
	error,
}) => {
	return (
		<div className={`indicator flex flex-col ${error ? "w-11/12" : "w-full"}`}>
			{error && (
				<span className="indicator-item badge text-error bg-base-200 border-0 border-error ">
					Requerido
				</span>
			)}
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={`input input-bordered w-full ${error ? "input-error" : ""}`}
				onChange={handleChange}
				value={value}
			/>
			{error && (
				<label className="label">
					<span className="label-text-alt text-error">{error}</span>
				</label>
			)}
		</div>
	);
};

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	error: PropTypes.string,
};
