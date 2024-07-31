import { Outlet } from "react-router";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";

export default function Layout() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}
