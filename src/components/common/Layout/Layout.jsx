import { Outlet } from "react-router";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import CartWidget from "../cartWidget/CartWidget";

export default function Layout() {
	return (
		<>
			<NavBar />
			<CartWidget />
			<Outlet />
			<Footer />
		</>
	);
}
