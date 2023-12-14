import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DATABASE } from "../fireBaseConfig.js";

const useFirebaseData = (objectName, itemName) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const itemCollection = collection(DATABASE, objectName);
				const res = await getDocs(itemCollection);
				const items = res.docs.map((item) => ({
					...item.data(),
					id: item.id,
				}));

				// Find the item with the specified name
				const selectedItem = items.find((item) => item.name === itemName);

				if (selectedItem) {
					setData(selectedItem);
				} else {
					setError(new Error(`Item '${itemName}' not found`));
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [objectName, itemName]);

	return { data, loading, error };
};

export default useFirebaseData;
