import SpaceCard from "../../common/SpaceCard/SpaceCard.jsx";
import ForoImg from "../../../assets/Foro-1.jpg";
import EstudioImg from "../../../assets/Estudio-1.png";

const EspaciosDisponibles = () => {
	return (
		<section className="flex-col justify-start items-center gap-28 inline-flex my-20 w-full max-w-7xl">
			<h2 className="max-w-4xl text-stone-900 text-6xl font-semibold ff-barlow text-center ff-barlow mt-16 group transition-all duration-200 ease-in-out">
				Conoce los{" "}
				<span className="text-accent group-hover:text-primary group-hover:scale-105">
					espacios disponibles
				</span>{" "}
				en renta para tu siguiente sesión
			</h2>
			<figure className=" px-8 flex flex-wrap md:flex-row gap justify-center items-baseline md:justify-between w-full lg:px-4">
				<SpaceCard
					imageSrc={ForoImg}
					title="Ciclorama infinito"
					area="30 m2"
					operationHours="Horario de operación 7 am - 9 pm"
					price="Desde $566 / hora"
					subLine="3 horas minimo"
					link="/renta/foro"
				/>
				<SpaceCard
					imageSrc={EstudioImg}
					title="Estudio"
					area="30 m2"
					operationHours="Horario de operación 7 am - 9 pm"
					price="Desde $433 / hora"
					subLine="3 horas minimo"
					link="/renta/estudio"
				/>
				<SpaceCard
					imageSrc={ForoImg}
					title="Cocina"
					area="30 m2"
					operationHours="Disponible como adicional en la
                    renta del estudio o ciclorama infinito"
					price="Desde $300 / hora"
					link="/renta/cocina"
				/>
			</figure>
		</section>
	);
};

export default EspaciosDisponibles;
