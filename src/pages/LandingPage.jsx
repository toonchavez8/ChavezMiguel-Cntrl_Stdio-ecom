import ProductListContainer from "../components/common/ProductList/ProductListContainer";
import Hero from "../components/landingPage/hero/Hero";
import StudioHighlights from "../components/landingPage/studioHighlights/StudioHighlights";

export default function LandingPage() {
	const heroTaglines = [
		"central es renta de estudio",
		"central es produccion audiovisual",
		"central es venta de texturas",
	];

	return (
		<main className="flex flex-col w-full items-center justify-center">
			<Hero heroTaglines={heroTaglines} />
			<StudioHighlights />
			<ProductListContainer />
		</main>
	);
}
