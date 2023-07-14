import { useFormik } from "formik";
import { InputField } from "../../components/common/Forms/InputField";
import PropTypes from "prop-types";

export default function Checkout({
	onSubmit,
	initialValues,
	validationSchema,
}) {
	const { handleSubmit, handleChange, errors, values } = useFormik({
		initialValues,
		onSubmit,
		validateOnChange: false,
		validationSchema,
	});

	return (
		<main className="w-full">
			<section className="w-full flex flex-col mt-24 gap-5 justify-center items-center debug">
				<h1 className="">meter orden</h1>

				<ul className="steps steps-vertical md:steps-horizontal">
					<li className="step step-primary">Nombre</li>
					<li className="step step-primary">Correo</li>
					<li className="step">Fecha</li>
					<li className="step">Enviar solictud</li>
				</ul>

				<article className="flex flex-col items-center justify-center  card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
					<form
						className="card-body form-control w-full"
						onSubmit={handleSubmit}
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-accent font-medium">
									Nombre
								</span>
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
								<span className="label-text text-accent font-medium">
									Correo
								</span>
							</label>
							<InputField
								label="Correo"
								name="email"
								placeholder="Correo"
								type="text"
								handleChange={handleChange}
								value={values.name}
								error={errors.name}
							/>
						</div>

						<button className="btn btn-primary mt-5" type="submit">
							Enviar
						</button>
					</form>
				</article>
			</section>
		</main>
	);
}

Checkout.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.object.isRequired,
	validationSchema: PropTypes.object.isRequired,
};
