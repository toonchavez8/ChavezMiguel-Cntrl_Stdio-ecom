import { useFormik } from "formik";
import * as Yup from "yup";
import AirbnbReviewEmail from "./Email.jsx";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

const EmailContactForm = () => {
	const emailDestination = import.meta.env.VITE_EMAIL_DESTINATION;
	const emailPassword = import.meta.env.VITE_EMAIL_PASSWORD;

	const transporter = nodemailer.createTransport({
		host: "mail.centralestudio.com",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: emailDestination,
			pass: emailPassword,
		},
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
			confirmEmail: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Como te llamas?"),
			email: Yup.string()
				.email("No es un correo válido")
				.required("Correo electrónico es requerido"),
			phone: Yup.string().matches(
				/^\+?[1-9]\d{1,14}$/,
				"No es un número de teléfono válido"
			), // Optional field
			message: Yup.string().required("Mensaje es requerido"),
		}),
		onSubmit: async (values) => {
			if (values.confirmEmail) {
				console.log(
					"Form submission canceled due to filled confirmEmail field"
				);
				return;
			}

			if (!emailDestination) {
				console.log(
					"No se envió el correo electrónico porque no se ha configurado la variable de ambiente VITE_EMAIL_DESTINATION"
				);
				return;
			}

			try {
				const emailHtml = render(
					<AirbnbReviewEmail
						clientName={values.name}
						clientEmail={values.email}
						reviewText={values.message}
					/>
				);

				const emailData = {
					from: values.email,
					to: emailDestination,
					subject: "Contacto de la comunidad central de Renta de Estudio",
					html: emailHtml,
				};

				await transporter.sendMail(emailData);
				console.log("Email sent successfully");
			} catch (error) {
				console.error("Error sending email:", error);
			}
		},
	});
	return (
		<form onSubmit={formik.handleSubmit} className="w-full">
			<input
				type="text"
				name="name"
				placeholder="Nombre"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
			/>
			<div className="flex ">
				{formik.touched.name && formik.errors.name ? (
					<div className="text-red-500">{formik.errors.name}</div>
				) : null}
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="text-red-500">{formik.errors.email}</div>
				) : null}
				<input
					type="tel"
					name="phone"
					placeholder="Teléfono (opcional)"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="w-full max-w-sm px-4 py-2 mb-4 font-normal text-left border border-gray-300 rounded-md focus:outline-none focus:border-accent hover:text-accent"
				/>
				{formik.touched.phone && formik.errors.phone ? (
					<div className="text-red-500">{formik.errors.phone}</div>
				) : null}
			</div>

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
				className="w-full max-w-sm px-4 py-2 font-normal text-left text-white rounded-md bg-accent hover:bg-accent-dark"
			>
				Enviar
			</button>
		</form>
	);
};

export default EmailContactForm;
