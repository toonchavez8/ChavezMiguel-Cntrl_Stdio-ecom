import { InputField } from "../common/Forms/InputField";
import { TextAreaField } from "../common/Forms/TextArea";
import { useFormik } from "formik";
import PropTypes from "prop-types";

// Reusable Form component
export const ContactForm = ({ onSubmit, initialValues, validationSchema }) => {
	const { handleSubmit, handleChange, errors, values } = useFormik({
		initialValues,
		onSubmit,
		validateOnChange: false,
		validationSchema,
	});

	return (
		<article className="flex flex-col items-center justify-center  card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
			<form className="card-body form-control w-full" onSubmit={handleSubmit}>
				<label className="label">
					<span className="label-text text-accent font-medium">Nombre</span>
				</label>
				<InputField
					label="Nombre"
					name="name"
					placeholder="Nombre"
					type="text"
					handleChange={handleChange}
					value={values.name}
					error={errors.name}
				/>
				<label className="label">
					<span className="label-text text-accent font-medium">Email</span>
				</label>
				<InputField
					label="Email"
					name="email"
					placeholder="Email"
					type="email"
					handleChange={handleChange}
					value={values.email}
					error={errors.email}
				/>
				<label className="label">
					<span className="label-text text-accent font-medium">Mensaje</span>
				</label>
				<TextAreaField
					label="Mensaje"
					name="message"
					placeholder="Mensaje"
					handleChange={handleChange}
					value={values.message}
					error={errors.message}
				/>
				<button className="btn btn-primary mt-5" type="submit">
					Enviar
				</button>
			</form>
		</article>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.object.isRequired,
	validationSchema: PropTypes.object.isRequired,
};
