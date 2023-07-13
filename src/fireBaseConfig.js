// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { config } from "dotenv";
import { getFirestore } from "firebase/firestore";

// Load environment variables from .env file
config();

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "centralstudio-1fafd.firebaseapp.com",
	projectId: "centralstudio-1fafd",
	storageBucket: "centralstudio-1fafd.appspot.com",
	messagingSenderId: "644087291671",
	appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
