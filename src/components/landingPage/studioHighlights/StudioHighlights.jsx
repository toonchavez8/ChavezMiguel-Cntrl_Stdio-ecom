import "./StudioHighlights.css";
import PropTypes from "prop-types";

import StudioIcon from "../../../assets/icons/studio-backdrop.svg";
import PortaciloramaIcon from "../../../assets/icons/portaciclorama.svg";
import MakeupIcon from "../../../assets/icons/makeup.svg";
import CateringIcon from "../../../assets/icons/dish.svg";
import TableIcon from "../../../assets/icons/Table.svg";
import ChairIcon from "../../../assets/icons/chair.svg";
import StairsIcon from "../../../assets/icons/ladder.svg";
import CoffeeIcon from "../../../assets/icons/coffee.svg";
import WaterDispenserIcon from "../../../assets/icons/water.svg";
import WifiIcon from "../../../assets/icons/wifi.svg";
import FridgeIcon from "../../../assets/icons/fridge.svg";
import BathroomIcon from "../../../assets/icons/bathroom.svg";
import PortableClosetsIcon from "../../../assets/icons/hanger.svg";
const StudioHighlights = () => {
	return (
		<section className="flex flex-col w-full items-center justify-center mb-12">
			<div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-7xl mt-12 md:mt-0">
				<h2 className="text-xl w-full max-w-lg md:text-3xl md:max-w-2xl ff-barlow text font-bold">
					<span className="text-accent">El lugar ideal</span> para tu producción
					de foto o video en Guadalajara
				</h2>

				<article className="px-12 md:px-0 md:pe-6 flex flex-col gap-8 ff-nunito">
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
					<p className="border-b-4 border-accent max-w-fit">Tu renta incluye</p>

					<div className="justify-between items-start inline-flex w-full max-w-7xl ">
						<div className="flex-col justify-start items-start inline-flex gap-2">
							{/* Studio Items */}
							<StudioItem icon={StudioIcon} text="Ciclorama blanco y negro" />
							<StudioItem icon={PortaciloramaIcon} text="Portaciclorama" />
							<StudioItem icon={MakeupIcon} text="Área de maquillaje" />
							<StudioItem
								icon={CateringIcon}
								text="Zona de catering / descanso"
							/>
							<StudioItem icon={TableIcon} text="2 Mesas de trabajo" />
							<StudioItem
								icon={ChairIcon}
								text="22 Sillas  y 1 banco de acero inox"
							/>
							<StudioItem icon={StairsIcon} text="3 Escaleras y 1 andamio" />
						</div>
						<div className="flex-col justify-between items-start inline-flex gap-2">
							{/* Additional Items */}
							<StudioItem icon={CoffeeIcon} text="Café y té de cortesía" />
							<StudioItem
								icon={WaterDispenserIcon}
								text="Dispensador de agua fría y caliente"
							/>
							<StudioItem icon={WifiIcon} text="Wifi simétrico de 200 MB" />
							<StudioItem icon={FridgeIcon} text="Frigobar" />
							<StudioItem
								icon={BathroomIcon}
								text="Baño con vestidor y regadera"
							/>
							<StudioItem
								icon={PortableClosetsIcon}
								text="2 Vestidores portátiles"
							/>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

// Separate component for each studio item
const StudioItem = ({ icon, text }) => (
	<div className=" justify-center items-center gap-2 inline-flex">
		<div className="w-7 h-7 relative">
			<img src={icon} alt={text} className="w-full h-full object-contain" />
		</div>
		<div className="text-stone-900 text-xl font-extrabold">{text}</div>
	</div>
);

StudioItem.propTypes = {
	icon: PropTypes.string.isRequired, // Assuming `icon` is a path to the image
	text: PropTypes.string.isRequired,
};

export default StudioHighlights;
