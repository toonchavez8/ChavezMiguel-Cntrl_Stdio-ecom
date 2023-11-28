import SpaceCard from "../../common/SpaceCard/SpaceCard.jsx";

const EspaciosDisponibles = () => {
	return (
		<section className="flex-col justify-start items-center gap-28 inline-flex my-20">
			<h2 className="max-w-4xl text-stone-900 text-6xl font-semibold ff-barlow text-center ff-barlow mt-16 group transition-all duration-200 ease-in-out">
				Conoce los{" "}
				<span className="text-accent group-hover:text-primary group-hover:scale-105">
					espacios disponibles
				</span>{" "}
				en renta para tu siguiente sesión
			</h2>
			<figure className="px-3 gap-10 flex flex-wrap justify-center items-baseline">
				<SpaceCard
					imageSrc="/CloudAssets/Foro-1.jpg"
					title="Ciclorama infinito"
					area="30 m2"
					operationHours="Horario de operación 7 am - 9 pm"
					price="Desde $350 / hora"
					link="/renta/foro"
				/>
				<SpaceCard
					imageSrc="/CloudAssets/Estudio-1.png"
					title="Estudio"
					area="30 m2"
					operationHours="Horario de operación 7 am - 9 pm"
					price="Desde $350 / hora"
					link="/renta/estudio"
				/>
				<SpaceCard
					imageSrc="/CloudAssets/Foro-1.jpg"
					title="Cocina"
					area="30 m2"
					operationHours="Disponible como adicional en la
                    renta del estudio o ciclorama infinito"
					price="Desde $350 / hora"
					link="/renta"
				/>
			</figure>
		</section>
	);
};

export default EspaciosDisponibles;
