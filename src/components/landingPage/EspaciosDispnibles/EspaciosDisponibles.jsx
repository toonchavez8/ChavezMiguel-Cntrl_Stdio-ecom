import SpaceCard from "../../common/SpaceCard/SpaceCard.jsx";
import ForoImg from "../../../assets/landing/Foro-1.jpg";
import EstudioImg from "../../../assets/landing/Estudio-1.png";

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
			<figure className="px-4 md:px-8 flex flex-wrap justify-center items-baseline gap-4  w-full">
				<SpaceCard
					imageSrc={ForoImg}
					title="Ciclorama infinito"
					area="30 m2"
					operationHours={
						<>
							Horario de operación <br /> 7 am - 9 pm
						</>
					}
					price="Desde $566 / hora"
					subLine="3 horas mínimo"
					link="/renta/foro"
				/>
				<SpaceCard
					imageSrc={EstudioImg}
					title="Estudio"
					area="30 m2"
					operationHours={
						<>
							Horario de operación <br /> 7 am - 9 pm
						</>
					}
					price="Desde $433 / hora"
					subLine="3 horas mínimo"
					link="/renta/estudio"
				/>
				<SpaceCard
					imageSrc={ForoImg}
					title="Cocina"
					area="30 m2"
					operationHours="Disponible como adicional en la renta del estudio o ciclorama infinito"
					price="Desde $300 / hora"
					link="/renta/cocina"
				/>
			</figure>
		</section>
	);
};

export default EspaciosDisponibles;
