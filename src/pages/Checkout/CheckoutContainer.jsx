import Checkout from "./Checkout";
import * as Yup from "yup";

export default function CheckoutContainer() {
	const onSubmit = (data) => {
		console.log(`mensaje de ${data.name} fue enviado ${data.date}`);
	};

	const initialValues = {
		name: "",
		email: "",
		date: "",
		phone: "",
		rentDate: new Date().toISOString().split("T")[0],
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Campo requerido")
			.min(3, "Mínimo 3 caracteres"),
		email: Yup.string().required("Campo requerido").email("Email inválido"),
		phone: Yup.string().required("Campo requerido"),
		date: Yup.date().required("Campo requerido"),
		rentDate: Yup.date().required("Campo requerido"), // Add validation for the rentDate field
	});
	return (
		<Checkout
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={validationSchema}
		/>
	);
}
