import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
	return (
		<section className=" py-8 w-full bg-primary flex-col justify-center items-center gap-8 inline-flex pt-16">
			<div className="flex-col justify-start items-center gap-7 flex">
				<div className="text-white text-4xl font-normal font- leading-10 text-center px-4  md:px-32">
					¿Necesitas un equipo creativo o más detalles de nuestro estudio?
					<br />
					<span className="text-white text-4xl font-semibold font-['Barlow'] leading-10">
						¡Escríbenos!
					</span>
				</div>
			</div>
			<div className="flex gap-3  items-center sm:justify-around flex-col sm:flex-row ff-nunito pt-5 w-full max-w-7xl  px-4 sm:px-16 md:px-32 ff-nunito font-bold">
				<button className="btn btn-outline btn-secondary border-2 group flex-1 max-w-sm  flex items-center font-bold">
					contacto
					<IoMailOutline className="scale-150 ms-2" />
				</button>

				<button className="btn btn-secondary border-2 text-primary group flex-1 max-w-sm flex items-center font-bold">
					Nuestro Trabajo
					<FaWhatsapp className="scale-150 ms-2" />
				</button>
			</div>
		</section>
	);
};

export default ContactSection;
