import { addDoc, collection } from "firebase/firestore";
import { espacios } from "./productMock";
import { DATABASE } from "../fireBaseConfig";

export default function AgregarDocs() {
	const rellenar = () => {
		let itemCollection = collection(DATABASE, "espacios");

		espacios.forEach((item) => {
			addDoc(itemCollection, item);
		});
	};

	return (
		<button onClick={rellenar} className="btn btn-primary">
			agregarDocs
		</button>
	);
}
