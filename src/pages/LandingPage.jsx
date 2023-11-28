import ProductListContainer from "../components/common/ProductList/ProductListContainer";
import ContactSection from "../components/landingPage/Contact/ContactSection.jsx";
import CycrloramaSection from "../components/landingPage/CycloramaSection/CycrloramaSection.jsx";
import EspaciosDisponibles from "../components/landingPage/EspaciosDispnibles/EspaciosDisponibles.jsx";
import Hero from "../components/landingPage/hero/Hero";
import StudioHighlights from "../components/landingPage/studioHighlights/StudioHighlights";

export default function LandingPage() {
	const heroTaglines = [
		`central es \n <strong>renta de estudio</strong>`,
		`central es \n <strong>fotografía y video</strong>`,
		`central es \n <strong>producción audiovisual</strong>`,
		`central es \n <strong>venta de cicloramas</strong>`,
	];

	return (
		<main className="flex flex-col w-full items-center justify-center bg-white ">
			<Hero heroTaglines={heroTaglines} />
			<EspaciosDisponibles />
			<StudioHighlights />
			<ProductListContainer />
			<CycrloramaSection />
			<ContactSection />
		</main>
	);
}
