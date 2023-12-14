import "./StudioHighlights.css";
import PropTypes from "prop-types";

import { PiOfficeChairBold } from "react-icons/pi";
import { LuCable } from "react-icons/lu";

import StudioIcon from "../../../assets/icons/studio-backdrop.svg";
import PortaciloramaIcon from "../../../assets/icons/portaciclorama.svg";
import MakeupIcon from "../../../assets/icons/makeup.svg";
import CateringIcon from "../../../assets/icons/dish.svg";
import TableIcon from "../../../assets/icons/table.svg";
import ChairIcon from "../../../assets/icons/chair.svg";
import StairsIcon from "../../../assets/icons/ladder.svg";
import CoffeeIcon from "../../../assets/icons/coffee.svg";
import WaterDispenserIcon from "../../../assets/icons/water.svg";
import WifiIcon from "../../../assets/icons/wifi.svg";
import FridgeIcon from "../../../assets/icons/fridge.svg";
import BathroomIcon from "../../../assets/icons/bathroom.png";
import PortableClosetsIcon from "../../../assets/icons/hanger.svg";
import Lights from "../../../assets/icons/umbrella.png";
import Rack from "../../../assets/icons/rack.png";
const StudioHighlights = () => {
	return (
		<section className="flex flex-col w-full items-center justify-center mb-12 px-4 md:px-24 antialiased ">
			<div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-7xl mt-12 md:mt-0 px-2">
				<h2 className="text-xl w-72 md:w-full max-w-lg md:text-3xl lg:max-w-2xl ff-barlow text font-bold">
					<span className="text-accent">El lugar ideal</span> para tu producción
					de foto o video en Guadalajara
				</h2>

				<article className="px-2 md:px- lg:px-0 md:pe-6 flex flex-col gap-8 ff-nunito">
					<p className="md:mt-6 leading-8">
						Aquí, ofrecemos equipo profesional y espacios prácticos que te
						permitirán dar vida a tus proyectos de fotografía y video. Nuestra
						misión es simple: queremos que te sientas como en casa mientras
						conviertes tus ideas en imágenes impactantes.
						<br />
						<span className="text-primary font-bold">
							¡Bienvenido a tu espacio creativo!
						</span>
					</p>
					<p className="border-b-4 border-accent  max-w-fit">
						Tu renta incluye
					</p>

					<div className="justify-between items-start flex flex-col xs:flex-row w-full max-w-7xl gap-4 mt-4">
						<div className="flex-col justify-start items-start inline-flex gap-2">
							{/* Studio Items */}
							<StudioItem
								icon={StudioIcon}
								text="Ciclorama blanco y negro"
								sub={"Colores adicionales $400 + iva"}
							/>
							<StudioItem icon={PortaciloramaIcon} text="Portaciclorama" />
							<StudioItem icon={MakeupIcon} text="Área de maquillaje" />
							<StudioItem
								icon={PortableClosetsIcon}
								text="2 Vestidores portátiles"
							/>
							<StudioItem
								icon={CateringIcon}
								text="Zona de catering / descanso"
							/>
							<StudioItem
								icon={TableIcon}
								text="5 Mesas de trabajo"
								sub={" de 2.40m, 2 de 1.20m y 1 mesa pequeña"}
							/>
							<StudioItem
								icon={ChairIcon}
								text="22 Sillas  y 1 banco de acero inox"
							/>
							<StudioItem icon={StairsIcon} text="3 Escaleras y 1 andamio" />
							<StudioItem text="Extensiones">
								<LuCable className="w-full h-full" />
							</StudioItem>
						</div>

						<div className="flex-col justify-between items-start inline-flex gap-2">
							{/* Additional Items */}
							<StudioItem
								icon={Lights}
								text="Kit Completo de 2 Flashes Godox"
							/>

							<StudioItem text="Silla de Director">
								<PiOfficeChairBold className="w-full h-full" />
							</StudioItem>

							<StudioItem icon={CoffeeIcon} text="Café y té de cortesía" />
							<StudioItem
								icon={WaterDispenserIcon}
								text="Dispensador de agua fría y caliente"
							/>
							<StudioItem icon={WifiIcon} text="Wifi simétrico de 300 MB" />
							<StudioItem
								icon={FridgeIcon}
								text="Frigobar"
								sub={"no incluye refrescos"}
							/>
							<StudioItem
								icon={BathroomIcon}
								text="Baño con vestidor y regadera"
							/>
							<StudioItem icon={Rack} text="Rack para ropa" />
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

// Separate component for each studio item
const StudioItem = ({ icon, text, sub, children }) => (
	<div className=" flex gap-1  text-left  hover:scale-105 ">
		<div className=" md:w-8 w-6  md:h-8 h-6   aspect-square">
			{icon && (
				<img src={icon} alt={text} className="w-full h-full object-contain" />
			)}
			{children}
		</div>
		<div className="flex flex-col ">
			<div className=" p-0 m-0  font-extrabold text-sm md:text-base ">
				{text}
			</div>
			{sub && <small className=" text-xs md:text-sm  -my-1 ">{sub}</small>}
		</div>
	</div>
);

StudioItem.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
	sub: PropTypes.string,
	children: PropTypes.node,
};

export default StudioHighlights;
