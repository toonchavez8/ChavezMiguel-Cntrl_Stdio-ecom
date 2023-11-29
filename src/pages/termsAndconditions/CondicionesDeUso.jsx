import { Link } from "react-router-dom";

const CondicionesDeUso = () => {
	return (
		<main className="max-w-3xl mx-auto my-8 mt-auto ff-barlow">
			<section className="prose h-full">
				<h1 className="text-3xl font-bold mb-4 text-center">
					CONDICIONES DE USO
				</h1>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary pr-8">A.</span> Las instalaciones se
						rentan en perfecto estado de funcionamiento, conservación y
						limpieza. El cliente se compromete a entregarlas al finalizar la
						producción en la misma forma. De lo contrario, se realizarían cargos
						extras por limpieza o daños.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary pr-8">B.</span> El cliente será
						responsable del comportamiento de su crew, empleados o invitados y
						de las contrataciones que haga con terceros, así como de su equipo.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary pr-8">C.</span> Está prohibido
						ingresar y/o consumir bebidas alcohólicas o sustancias psicotrópicas
						y estupefacientes de cualquier tipo.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary pr-8">D.</span> Se encuentra prohibido
						fumar dentro de las instalaciones.
					</p>
				</div>
				<div className="mb-4">
					<p className="font-semibold">
						<span className="text-primary pr-8">E.</span> La entrada de animales
						está permitida, previa autorización.
					</p>
				</div>

				<Link to={"/politica-de-renta"} className="link link-primary">
					Conocer las Condiciones de Uso
				</Link>
			</section>
		</main>
	);
};

export default CondicionesDeUso;
