import { useEffect, useState } from "react";
import { equipo } from "../../../data/productMock";
import ProductList from "./ProductList";
import { useParams } from "react-router";

export default function ProductListContainer() {
	const [products, setProducts] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		let productosFiltrados = equipo.filter(
			(item) => item.category === category
		);

		const getProducts = new Promise((resolve) => {
			resolve(category ? productosFiltrados : equipo);
		});

		getProducts
			.then((res) => {
				setProducts(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				console.log("termino");
			});
	}, [category]);

	console.log(products);
	return <ProductList products={products} />;
}
