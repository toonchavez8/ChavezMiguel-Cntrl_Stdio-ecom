import EspaciosDisponiblesContainer from "./EspaciosDisponiblesContainer.jsx";

const EspaciosDisponibles = () => {
	return (
		<section
			id="conoce-los-espacios"
			className="flex-col justify-start items-center gap-28 inline-flex my-20 w-full max-w-7xl"
		>
			<h2 className="max-w-4xl text-xl px-2 w-84 text-stone-900 md:px-2 lg:px-2 md:w-[30rem] lg:w-full md:text-3xl lg:text-6xl font-semibold ff-barlow text-center ff-barlow mt-16 group transition-all duration-200 ease-in-out">
				Conoce los{" "}
				<span className="text-accent group-hover:text-primary group-hover:scale-105">
					espacios disponibles
				</span>{" "}
				en renta para tu siguiente sesión
			</h2>
			<EspaciosDisponiblesContainer />
		</section>
	);
};

export default EspaciosDisponibles;
