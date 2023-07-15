import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "centralstudio-1fafd.firebaseapp.com",
	projectId: "centralstudio-1fafd",
	storageBucket: "centralstudio-1fafd.appspot.com",
	messagingSenderId: "644087291671",
	appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DATABASE = getFirestore(app);
