import { useEffect, useState } from "react";

import ProductList from "./ProductList";
import { useParams } from "react-router";
import { DATABASE } from "../../../fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ProductListContainer() {
	// State variable to store the products
	const [products, setProducts] = useState([]);

	// Extracting the "category" parameter from the URL
	const { category } = useParams();

	useEffect(() => {
		let itemCollection = collection(DATABASE, "equipo");
		let search;

		if (!category) {
			// get item collection froim database and pull table
			search = itemCollection;
		} else {
			// Create a query to filter by category
			search = query(itemCollection, where("category", "==", category));
		}

		getDocs(search)
			.then((res) => {
				let items = res.docs.map((item) => {
					return {
						...item.data(),
						id: item.id,
					};
				});
				setProducts(items);
			})
			.catch((err) => console.log(err));
	}, [category]);

	// Rendering the ProductList component with the products
	return <ProductList products={products} />;
}
