import { DATABASE } from "../../fireBaseConfig";
import Checkout from "./Checkout";
import * as Yup from "yup";

import { collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import OrderComponet from "../../components/cartPage/OrderComponent";

export default function CheckoutContainer() {
	const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
	const [orderId, setOrderId] = useState();

	const totalPrice = getTotalPrice().total;

	const onSubmit = (data) => {
		let order = {
			buyer: data,
			items: cartItems,
			total: totalPrice,
		};

		console.log(order);

		let ordersCollection = collection(DATABASE, "orders");

		addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

		clearCart();
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
		<>
			{orderId ? (
				<OrderComponet orderId={orderId} />
			) : (
				<Checkout
					onSubmit={onSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				/>
			)}
		</>
	);
}
