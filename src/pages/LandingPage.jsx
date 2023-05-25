import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";
import Hero from "../components/landingPage/Hero";

export default function LandingPage() {
	return (
		<>
			<NavBar />
			<main>
				<Hero />
			</main>
			<Footer />
		</>
	);
}
