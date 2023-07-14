import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { getDoc, doc, collection } from "firebase/firestore";
import { DATABASE } from "../../fireBaseConfig";

export default function ProductDetailContainer() {
	const [productSelected, setProductSelected] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	const { addToCart, getTotalQuanityById } = useContext(CartContext);

	const Quantity = getTotalQuanityById(id);

	console.log("Amount in cart", Quantity);

	useEffect(() => {
		let itemCollection = collection(DATABASE, "equipo");
		let refDoc = doc(itemCollection, id);

		getDoc(refDoc)
			.then((res) => {
				setProductSelected({ ...res.data(), id: res.id });
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(setIsLoading(false));
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<span className="loading loading-spinner loading-md"></span>
			) : (
				<ProductDetail
					productSelected={productSelected}
					addToCart={addToCart}
					Quantity={Quantity}
				/>
			)}
		</div>
	);
}
