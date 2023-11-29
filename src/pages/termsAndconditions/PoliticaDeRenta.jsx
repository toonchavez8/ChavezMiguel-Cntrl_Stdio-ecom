import { Link } from "react-router-dom";

const PoliticaDeRenta = () => {
	return (
		<main className="max-w-3xl mx-auto mt-20 mb-8  ff-barlow">
			<section className="prose h-full">
				<h1 className="text-3xl font-bold mb-4 text-center">
					POLÍTICAS DE RENTA
				</h1>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary font-bold pr-8">A.</span> La
						reservación se confirma con el pago total de la renta.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary font-bold pr-8">B.</span> Se solicita
						un depósito en efectivo de $1,000 al momento de llegar, mismos que
						serán devueltos al finalizar la producción y comprobar que todo se
						encuentre en buen estado.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary font-bold pr-8">C.</span> Puedes
						cancelar o modificar tu reserva hasta 72 horas antes de la hora de
						inicio de tu reserva. Las cancelaciones de reservaciones enviadas
						menos de 72 horas antes de la hora de inicio de la reserva no son
						reembolsables.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary font-bold pr-8">D.</span> En las horas
						contratadas está contemplado todo el proceso (carga, instalación,
						maquillaje de modelos y desmontaje). Se cuenta con 15 minutos de
						tolerancia al finalizar las horas contratadas, pasado ese tiempo se
						cobrarán las horas extras correspondientes.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary font-bold pr-8">E.</span> El mínimo de
						horas en renta es de 3 horas, en horario de 7 a 21 horas.
					</p>
				</div>

				<Link to={"/condiciones-de-uso"} className="link link-primary">
					Conocer las Condiciones de Uso
				</Link>
			</section>
		</main>
	);
};

export default PoliticaDeRenta;
