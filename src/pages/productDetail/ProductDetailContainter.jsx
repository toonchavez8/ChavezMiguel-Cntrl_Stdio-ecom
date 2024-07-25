import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getDoc, doc, collection } from "firebase/firestore";
import { DATABASE } from "../../fireBaseConfig";

export default function ProductDetailContainer() {
	const [productSelected, setProductSelected] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		let itemCollection = collection(DATABASE, "equipo");
		let refDoc = doc(itemCollection, id);

		getDoc(refDoc)
			.then((res) => {
				setProductSelected({ ...res.data(), id: res.id });
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setIsLoading(false));
	}, [id]);

	return (
		<div className="flex items-center justify-center h-full">
			{isLoading ? (
				<span className="loading loading-spinner loading-lg text-primary "></span>
			) : (
				<ProductDetail productSelected={productSelected} />
			)}
		</div>
	);
}
