import CicloramaWidget from "../../common/CicroamaWidget/CicloramaWidget.jsx";

import SuperWhiteRoll from "../../../assets/CicloramaWidget/SuperWhite_Roll.png";
import SuperWhiteCiclorama from "../../../assets/CicloramaWidget/SuperWhite_Ciclorama.png";
import BlackRoll from "../../../assets/CicloramaWidget/Black_Roll.png";
import BlackCiclorama from "../../../assets/CicloramaWidget/Black_Ciclorama.png";
import CocoaRoll from "../../../assets/CicloramaWidget/Cocoa_Roll.png";
import CocoaCiclorama from "../../../assets/CicloramaWidget/Cocoa_Ciclorama.png";
import DeepYellowRoll from "../../../assets/CicloramaWidget/DeepYellow_Roll.png";
import DeepYellowCiclorama from "../../../assets/CicloramaWidget/DeepYellow_Ciclorama.png";
import PrimaryRedRoll from "../../../assets/CicloramaWidget/PrimaryRed_Roll.png";
import PrimaryRedCiclorama from "../../../assets/CicloramaWidget/PrimaryRed_Ciclorama.png";
import TechGreenRoll from "../../../assets/CicloramaWidget/TechGreen_Roll.png";
import TechGreenCiclorama from "../../../assets/CicloramaWidget/TechGreen_Ciclorama.png";
import TrueBlueRoll from "../../../assets/CicloramaWidget/TrueBlue_Roll.png";
import TrueBlueCiclorama from "../../../assets/CicloramaWidget/TrueBlue_Ciclorama.png";

const CycloramaData = [
	{
		title: "Super White",
		roll: SuperWhiteRoll,
		ciclroma: SuperWhiteCiclorama,
	},
	{
		title: "Black",
		roll: BlackRoll,
		ciclroma: BlackCiclorama,
	},
	{
		title: "Cocoa",
		roll: CocoaRoll,
		ciclroma: CocoaCiclorama,
	},
	{
		title: "Deep Yellow",
		roll: DeepYellowRoll,
		ciclroma: DeepYellowCiclorama,
	},
	{
		title: "Primary Red",
		roll: PrimaryRedRoll,
		ciclroma: PrimaryRedCiclorama,
	},
	{
		title: "Tech Green",
		roll: TechGreenRoll,
		ciclroma: TechGreenCiclorama,
	},
	{
		title: "True Blue",
		roll: TrueBlueRoll,
		ciclroma: TrueBlueCiclorama,
	},
];

const CycrloramaSection = () => {
	return (
		<section className="w-full flex  flex-col justify-center items-center max-w-7xl my-16 p-2 gap-2 md:gap-10 md:gap-18">
			<h2 className=" text-3xl md:text-5xl font-semibold ff-barlow leading-10 text-center w-full max-w-lg">
				Ármate con
				<span className="text-accent"> cicloramas </span>
				para tus producciones
			</h2>
			<figure className="flex flex-col gap-8  md:flex-row w-full justify-around items-center ">
				<div className="flex flex-col w-full max-w-md prose ff-nunito px-4">
					<p>
						Aprovecha nuestras existencias para{" "}
						<strong>entrega inmediata</strong> y dale a tus producciones de foto
						y video el fondo perfecto.
					</p>
					<p>
						Ya sea en <strong>venta o en renta</strong>, con Central Estudio, no
						solo obtienes los mejores espacios en renta en Guadalajara, sino
						también los mejores cicloramas en gran variadad de colores.
					</p>
				</div>
				<CicloramaWidget ciclromaData={CycloramaData} />
			</figure>
			{/* Call to Action */}
			<div className="w-full text-center -mt-8 md:-mt-12  ">
				<p className="text-lg md:text-2xl font-medium mb-4">
					Descubre la Variedad de Cicloramas Disponibles. <br />
					<span className="text-accent">
						¡Transforma tus Producciones Ahora!
					</span>
				</p>
				<button className="btn btn-primary text-white py-3 px-6 rounded hover:bg-opacity-90 transition-all duration-300 ease-in-out">
					¡Explora los Cicloramas!
				</button>
			</div>
		</section>
	);
};

export default CycrloramaSection;
