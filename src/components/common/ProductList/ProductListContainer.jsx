import { useEffect, useState } from "react";

import ProductList from "./ProductList";
import { useParams } from "react-router";
import { DATABASE } from "../../../fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ProductListContainer() {
	// State variable to store the products
	const [products, setProducts] = useState([]);

	// Extracting the "category" parameter from the URL
	const { category } = useParams();

	useEffect(() => {
		// get item collection froim database and pull table
		let itemCollection = collection(DATABASE, "equipo");

		getDocs(itemCollection)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}, [category]);

	// Rendering the ProductList component with the products
	return <ProductList products={products} />;
}
