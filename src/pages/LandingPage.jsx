import Hero from "../components/landingPage/Hero";

export default function LandingPage() {
	const heroTaglines = [
		"central es renta de estudio",
		"central es produccion audiovisual",
		"central es venta de texturas",
	];

	return (
		<main>
			<Hero heroTaglines={heroTaglines} />
		</main>
	);
}
