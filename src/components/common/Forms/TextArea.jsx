import PropTypes from "prop-types";

// Reusable TextArea component
export const TextAreaField = ({
	name,
	placeholder,
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
			<textarea
				placeholder={placeholder}
				name={name}
				className={`textarea textarea-bordered h-24 ${
					error ? "textarea-error" : ""
				}`}
				onChange={handleChange}
				value={value}
			></textarea>
			{error && (
				<label className="label">
					<span className="label-text-alt text-error">{error}</span>
				</label>
			)}
		</div>
	);
};

TextAreaField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	error: PropTypes.string,
};
