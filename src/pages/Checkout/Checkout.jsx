import { useFormik } from "formik";
import { InputField } from "../../components/common/Forms/InputField";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Checkout({
	onSubmit,
	initialValues,
	validationSchema,
}) {
	const [nameFilled, setNameFilled] = useState(false);
	const [emailFilled, setEmailFilled] = useState(false);
	const [phoneFilled, setPhoneFilled] = useState(false);
	const [dateFilled, setDateFilled] = useState(false);

	const { handleSubmit, handleChange, errors, values } = useFormik({
		initialValues,
		onSubmit,
		validateOnChange: false,
		validationSchema,
	});

	const handleNameChange = (e) => {
		handleChange(e);
		setNameFilled(e.target.value.trim() !== "");
	};

	const handleEmailChange = (e) => {
		handleChange(e);
		setEmailFilled(e.target.value.trim() !== "");
	};

	const handlePhoneChange = (e) => {
		handleChange(e);
		setPhoneFilled(e.target.value.trim() !== "");
	};

	const handleDateChange = (e) => {
		handleChange(e);
		setDateFilled(e.target.value.trim() !== "");
	};

	return (
		<main className="w-full">
			<section className="w-full flex flex-col mt-24 gap-5 justify-center items-center   ">
				<h1 className="prose-xl capitalize mt-8 text-3xl font-semibold border-b-2 w-full text-center max-w-md pb-4 border-accent text-primary">
					meter orden
				</h1>

				<ul className="steps steps-vertical md:steps-horizontal">
					<li className={`step ${nameFilled ? "step-primary" : ""}`}>Nombre</li>
					<li className={`step ${emailFilled ? "step-primary" : ""}`}>
						Correo
					</li>
					<li className={`step ${phoneFilled ? "step-primary" : ""}`}>
						Numero
					</li>
					<li className={`step ${dateFilled ? "step-primary" : ""}`}>Fecha</li>
					<li className="step">Enviar solictud</li>
				</ul>

				<article className="flex flex-col items-center justify-center  card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200 mb-24 ">
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
								handleChange={handleNameChange}
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
								handleChange={handleEmailChange}
								value={values.email}
								error={errors.email}
							/>
							<label className="label">
								<span className="label-text text-accent font-medium">
									Numero
								</span>
							</label>
							<InputField
								label="Numero"
								name="phone"
								placeholder="123-456-7890"
								type="text"
								handleChange={handlePhoneChange}
								value={values.phone}
								error={errors.phone}
							/>

							<label className="label">
								<span className="label-text text-accent font-medium">
									Fecha de renta
								</span>
							</label>
							<InputField
								label="Fecha de renta"
								name="date"
								type="date"
								placeholder={values.rentDate}
								handleChange={handleDateChange}
								value={values.date}
								error={errors.date}
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
