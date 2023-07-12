import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { equipo } from "../../data/productMock";
import { CartContext } from "../../context/cartContext";

export default function ProductDetailContainter() {
	const [productSelected, setProductSelected] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	const { addToCart, getTotalQuanityById } = useContext(CartContext);

	const Quantity = getTotalQuanityById(id);

	console.log("Amount in cart", Quantity);

	// use effect to find product based on id
	useEffect(() => {
		let findProduct = equipo.find((product) => product.id == id);

		const getProduct = new Promise((resolve) => {
			setTimeout(() => {
				resolve(findProduct);
			}, 2000);
		});

		getProduct
			.then((product) => {
				setProductSelected(product);
				console.log("Product retrieved:", product);
			})
			.catch((error) => {
				console.error("Error retrieving product:", error);
			})
			.finally(() => {
				setIsLoading(false);
			});
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
