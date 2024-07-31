import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
	const formRef = useRef();
	const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'sent', 'failed'

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
				.then(
					() => {
						setStatus("sent");
					},
					() => {
						setStatus("failed");
					}
				)
				.finally(() => setTimeout(() => setStatus("idle"), 3000)); // Reset status after 3 seconds
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
				return "bg-accent hover:bg-accent-dark";
		}
	};

	return (
		<form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
			<input
				type="text"
				name="from_name"
				placeholder="Nombre"
				value={formik.values.from_name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
			/>
			{formik.touched.from_name && formik.errors.from_name ? (
				<div className="text-red-500">{formik.errors.from_name}</div>
			) : null}

			<input
				type="email"
				name="from_email"
				placeholder="Email"
				value={formik.values.from_email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
			/>
			{formik.touched.from_email && formik.errors.from_email ? (
				<div className="text-red-500">{formik.errors.from_email}</div>
			) : null}

			<input
				type="tel"
				name="from_phone"
				placeholder="Teléfono (opcional)"
				value={formik.values.from_phone}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
			/>
			{formik.touched.from_phone && formik.errors.from_phone ? (
				<div className="text-red-500">{formik.errors.from_phone}</div>
			) : null}

			<textarea
				name="message"
				placeholder="Mensaje"
				value={formik.values.message}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
			/>
			{formik.touched.message && formik.errors.message ? (
				<div className="text-red-500">{formik.errors.message}</div>
			) : null}

			{/* Hidden input field for anti-spam */}
			<input
				type="email"
				name="confirmEmail"
				value={formik.values.confirmEmail}
				onChange={formik.handleChange}
				className="hidden"
			/>

			<button
				type="submit"
				className={`w-full max-w-sm px-4 py-2 font-normal text-left text-white rounded-md ${buttonClass()}`}
				disabled={status === "loading"}
			>
				{renderButtonContent()}
			</button>

			{status === "failed" && (
				<div className="mt-4 text-red-500">
					Error al enviar el email. Inténtelo de nuevo más tarde.
				</div>
			)}
			{status === "sent" && (
				<div className="mt-4 text-green-500">Email enviado exitosamente.</div>
			)}
		</form>
	);
};

export default EmailContactForm;
