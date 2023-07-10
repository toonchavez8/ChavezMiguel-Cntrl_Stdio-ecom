import { useState } from "react";

import ProductList from "./ProductList";
import { useParams } from "react-router";

export default function ProductListContainer() {
	const [products] = useState([]);
	const { category } = useParams();

	console.log(category);

	console.log(products);
	return <ProductList products={products} />;
}
