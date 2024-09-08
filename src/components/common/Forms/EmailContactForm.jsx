import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
	const formRef = useRef();
	const [status, setStatus] = useState("idle");

	const formik = useFormik({
		initialValues: {
			from_name: "",
			from_email: "",
			from_phone: "",
			message: "",
			confirmEmail: "",
		},
		validationSchema: Yup.object({
			from_name: Yup.string().required("¿Cómo te llamas?"),
			from_email: Yup.string()
				.email("No es un correo válido")
				.required("Correo electrónico es requerido"),
			from_phone: Yup.string().matches(
				/^\+?[1-9]\d{1,14}$/,
				"No es un número de teléfono válido"
			),
			message: Yup.string().required("Mensaje es requerido"),
		}),
		onSubmit: (values) => {
			if (values.confirmEmail) {
				console.log(
					"Form submission canceled due to filled confirmEmail field"
				);
				return;
			}

			setStatus("loading");

			emailjs
				.sendForm(
					import.meta.env.VITE_EMAIL_SERVICE_ID,
					import.meta.env.VITE_EMAIL_TEMPLATE_ID,
					formRef.current,
					import.meta.env.VITE_EMAIL_PUBLIC_KEY
				)
				.then(() => {
					setStatus("sent");
				})
				.catch(() => {
					setStatus("failed");
				})
				.finally(() => setTimeout(() => setStatus("idle"), 3000));
		},
	});

	const renderButtonContent = () => {
		switch (status) {
			case "loading":
				return "Enviando...";
			case "sent":
				return "Enviado";
			case "failed":
				return "Error al enviar";
			default:
				return "Enviar";
		}
	};

	const buttonClass = () => {
		switch (status) {
			case "loading":
				return "cursor-not-allowed animate-pulse bg-accent";
			case "sent":
				return "bg-secondary text-primary";
			case "failed":
				return "bg-red-500";
			default:
				return "border border-accent text-white hover:bg-accent-dark";
		}
	};

	// Function to conditionally set placeholder or error message
	const getPlaceholderOrError = (fieldName) => {
		const field = formik.touched[fieldName] && formik.errors[fieldName];
		return formik.values[fieldName] === "" && field
			? formik.errors[fieldName]
			: "";
	};

	return (
		<form
			ref={formRef}
			onSubmit={formik.handleSubmit}
			className="flex flex-col items-start justify-start w-full gap-1 md:pe-12 "
		>
			<p className="text-lg ">
				Envianos un mensaje y dinos como podemos ayudarte.
			</p>

			{/* Name Field */}
			<div className="relative w-full">
				<input
					type="text"
					name="from_name"
					placeholder={getPlaceholderOrError("from_name") || "Nombre"}
					value={formik.values.from_name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className={`w-full px-4 py-2 mb-4 font-normal text-left bg-transparent border-b border-gray-300 focus:outline-none focus:border-accent hover:text-accent ${
						formik.touched.from_name && formik.errors.from_name
							? "placeholder-red-500"
							: ""
					}`}
				/>
				{formik.touched.from_name &&
				formik.errors.from_name &&
				formik.values.from_name ? (
					<div className="absolute left-0 -mt-4 text-sm text-red-500 top-full">
						{formik.errors.from_name}
					</div>
				) : null}
			</div>

			<div className="flex flex-col items-start justify-start w-full gap-4 md:gap-0 md:flex-row">
				{/* Email Field */}
				<div className="relative w-full">
					<input
						type="email"
						name="from_email"
						placeholder={getPlaceholderOrError("from_email") || "Email"}
						value={formik.values.from_email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`w-full px-4 py-2 mb-4 font-normal text-left bg-transparent border-b border-gray-300 focus:outline-none focus:border-accent hover:text-accent ${
							formik.touched.from_email && formik.errors.from_email
								? "placeholder-red-500"
								: ""
						}`}
					/>
					{formik.touched.from_email &&
					formik.errors.from_email &&
					formik.values.from_email ? (
						<div className="absolute left-0 -mt-4 text-sm text-red-500 top-full">
							{formik.errors.from_email}
						</div>
					) : null}
				</div>

				{/* Phone Field */}
				<div className="relative w-full">
					<input
						type="tel"
						name="from_phone"
						placeholder={
							getPlaceholderOrError("from_phone") || "Teléfono (opcional)"
						}
						value={formik.values.from_phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`w-full px-4 py-2 mb-4 font-normal text-left bg-transparent border-b border-gray-300 focus:outline-none focus:border-accent hover:text-accent ${
							formik.touched.from_phone && formik.errors.from_phone
								? "placeholder-red-500"
								: ""
						}`}
					/>
					{formik.touched.from_phone &&
					formik.errors.from_phone &&
					formik.values.from_phone ? (
						<div className="absolute left-0 -mt-4 text-sm text-red-500 top-full">
							{formik.errors.from_phone}
						</div>
					) : null}
				</div>
			</div>

			{/* Message Field */}
			<div className="relative w-full">
				<textarea
					name="message"
					placeholder={getPlaceholderOrError("message") || "Mensaje"}
					value={formik.values.message}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className={`w-full px-4 py-2 mb-4 font-normal text-left bg-transparent border-b border-gray-300 focus:outline-none focus:border-accent hover:text-accent ${
						formik.touched.message && formik.errors.message
							? "placeholder-red-500"
							: ""
					}`}
				/>
				{formik.touched.message &&
				formik.errors.message &&
				formik.values.message ? (
					<div className="absolute left-0 -mt-4 text-sm text-red-500 top-full">
						{formik.errors.message}
					</div>
				) : null}
			</div>

			{/* Hidden input for spam prevention */}
			<input
				type="email"
				name="confirmEmail"
				value={formik.values.confirmEmail}
				onChange={formik.handleChange}
				className="hidden"
			/>

			{/* Submit Button */}
			<button
				type="submit"
				className={`w-full max-w-sm px-4 py-2 font-normal text-left rounded-md ${buttonClass()}`}
				disabled={status === "loading"}
			>
				{renderButtonContent()}
			</button>
		</form>
	);
};

export default EmailContactForm;
