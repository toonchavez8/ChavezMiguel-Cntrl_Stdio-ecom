import Checkout from "./Checkout";
import * as Yup from "yup";

export default function CheckoutContainer() {
	const onSubmit = (data) => {
		console.log(`mensaje de ${data.name} fue enviado`);
	};

	const initialValues = {
		name: "",
		email: "",
		date: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Campo requerido")
			.min(3, "Mínimo 3 caracteres"),
		email: Yup.string().required("Campo requerido").email("Email inválido"),
		message: Yup.string()
			.required("Campo requerido")
			.min(10, "Mínimo 10 caracteres"),
	});
	return (
		<Checkout
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={validationSchema}
		/>
	);
}
