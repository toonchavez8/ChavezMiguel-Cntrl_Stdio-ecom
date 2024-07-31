import EspaciosDisponiblesContainer from "./EspaciosDisponiblesContainer.jsx";

const EspaciosDisponibles = () => {
	return (
		<section
			id="conoce-los-espacios"
			className="inline-flex flex-col items-center justify-start w-full my-20 gap-28 max-w-7xl"
		>
			<h2 className="max-w-5xl text-lg px-2 w-84 text-stone-900 md:px-2 lg:px-2 md:w-[30rem] lg:w-full md:text-3xl lg:text-3xl font-semibold ff-barlow text-center ff-barlow mt-16 group transition-all duration-200 ease-in-out">
				Descubre el lugar ideal para tu producción fotográfica o de video en
				Guadalajara a una cuadra de Av. Hidalgo y Américas. <br />
				Explora nuestros espacios en renta y encuentra el escenario perfecto
				para tu próxima sesión.
			</h2>
			<EspaciosDisponiblesContainer />
		</section>
	);
};

export default EspaciosDisponibles;
