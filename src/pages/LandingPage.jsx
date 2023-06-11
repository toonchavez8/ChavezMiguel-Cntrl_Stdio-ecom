import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";
import Hero from "../components/landingPage/Hero";

export default function LandingPage() {
	const heroTaglines = [
		"central es renta de estudio",
		"central es produccion audiovisual",
		"central es venta de texturas",
	];

	return (
		<>
			<NavBar />
			<main>
				<Hero heroTaglines={heroTaglines} />
			</main>
			<Footer />
		</>
	);
}
