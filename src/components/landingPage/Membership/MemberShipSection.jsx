import { useState } from "react";

const MemberShipSection = () => {
	const [hoveredPlan, setHoveredPlan] = useState(null);

	const handleHover = (plan) => {
		setHoveredPlan(plan);
	};

	return (
		<section className="max-w-6xl w-full mx-auto my-8 px-8 mt-auto flex flex-col gap-8 justify-center items-center ff-barlow">
			<h2 className="text-2xl md:text-4xl font-bold mb-4 text-center max-w-3xl">
				Adelántate a tus producciones con nuestras
				<span className="text-accent"> MEMBRESÍAS </span> de estudio y foro
			</h2>
			<figure className="flex flex-col md:flex-row gap-2 w-full justify-around items-center">
				{/* Membresía PLUS */}
				<div
					className={`bg-white shadow-lg stroke-white border-2 h-64 rounded border-primary mb-8 py-4 px-2 flex flex-col items-center transition-all transform ${
						hoveredPlan !== "PLUS" ? "scale-115" : ""
					} ease-out justify-center`}
					onMouseEnter={() => handleHover("PLUS")}
					onMouseLeave={() => handleHover(null)}
				>
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-primary">
						PLUS
					</h3>
					<p className="text-4xl font-extrabold text-primary">
						<span className="text-xl ">$</span>4,600
					</p>
					<p className="font-semibold mb-2 px-2">20 horas de estudio</p>
					<p className="text-base-300 ">Precio regular $5,600 + cicloramas</p>
				</div>

				{/* Membresía ULTRA */}
				<div
					className={`bg-white shadow-lg stroke-white border-2 h-64 rounded border-secondary mb-8 py-4 px-2 flex flex-col items-center transition-all transform ${
						hoveredPlan === "ULTRA" ? "scale-125" : "scale-100"
					} ease-out justify-center`}
					onMouseEnter={() => handleHover("ULTRA")}
					onMouseLeave={() => handleHover(null)}
				>
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-secondary">
						ULTRA
					</h3>
					<p className="text-4xl font-extrabold text-secondary">
						<span className="text-xl ">$</span>6,500
					</p>
					<p className="font-semibold mb-2 px-2">20 horas de foro</p>
					<p className="text-base-300 ">Precio regular $7,800 + cicloramas</p>
				</div>

				{/* Membresía PREMIUM */}
				<div
					className={`bg-white shadow-lg stroke-white border-2 h-64 rounded border-accent mb-8 py-4 px-2 flex flex-col items-center transition-all transform ${
						hoveredPlan === "PREMIUM" ? "scale-115" : "scale-100"
					} ease-out justify-center`}
					onMouseEnter={() => handleHover("PREMIUM")}
					onMouseLeave={() => handleHover(null)}
				>
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-accent">
						PREMIUM
					</h3>
					<p className="text-4xl font-extrabold text-accent">
						<span className="text-xl ">$</span>9,900
					</p>
					<p className="font-semibold mb-2 px-2">20 horas de foro + estudio</p>
					<p className="text-base-300 ">Precio regular $13,400 + cicloramas</p>
				</div>
			</figure>

			{/* Included in the membership */}
			<div className="w-full text-center">
				<h4 className="text-3xl font-bold mb-4">Incluido en la membresía</h4>
			</div>

			<ul className="w-full text-center">
				<li>Todos los cicloramas de colores disponibles</li>
				<li>2 Flashes de estudio Godox SK40011-V con reflectores</li>
				<li>2 Softbox Godox SB-BW 60 x 90 cm</li>
				<li>1 transmisor Godox XT-16</li>
				<li>1 rebotador plegable 5 en 1</li>
				<li>10 filtros de tela de colores</li>
				<li>
					-15% en rentas de otros espacios, horas extras, equipo o rentas
					durante el fin de semana durante la vigencia de la membresía.
				</li>
			</ul>
		</section>
	);
};

export default MemberShipSection;
