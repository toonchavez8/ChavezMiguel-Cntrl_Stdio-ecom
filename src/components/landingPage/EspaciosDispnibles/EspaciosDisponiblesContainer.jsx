import SpaceCard from "../../common/SpaceCard/SpaceCard.jsx";
import ForoImg from "../../../assets/landing/Foro-1.jpg";
import EstudioImg from "../../../assets/landing/Estudio-1.png";
const EspaciosDisponiblesContainer = () => {
	return (
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
	);
};

export default EspaciosDisponiblesContainer;
