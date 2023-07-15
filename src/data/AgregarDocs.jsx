import { addDoc, collection } from "firebase/firestore";
import { equipo } from "./productMock";
import { DATABASE } from "../fireBaseConfig";

export default function AgregarDocs() {
	const rellenar = () => {
		let itemCollection = collection(DATABASE, "equipo");

		equipo.forEach((item) => {
			addDoc(itemCollection, item);
		});
	};

	return (
		<button onClick={rellenar} className="btn btn-primary">
			agregarDocs
		</button>
	);
}
