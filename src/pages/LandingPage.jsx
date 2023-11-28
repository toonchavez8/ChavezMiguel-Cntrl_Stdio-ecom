import ProductListContainer from "../components/common/ProductList/ProductListContainer";
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
		<main className="flex flex-col w-full items-center justify-center">
			<Hero heroTaglines={heroTaglines} />
			<StudioHighlights />
			<ProductListContainer />
		</main>
	);
}
