import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
	return (
		<section className="inline-flex flex-col items-center justify-center w-full gap-8 py-8 pt-16  bg-primary">
			<div className="flex flex-col items-center justify-start gap-7">
				<div className="px-4 text-2xl font-normal leading-10 text-center text-white md:text-4xl font- md:px-32">
					¿Necesitas un equipo creativo o más detalles de nuestro estudio?
					<br />
					<span className="text-white text-2xl md:text-4xl font-semibold font-['Barlow'] leading-10">
						¡Escríbenos!
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center w-full gap-3 px-4 pt-5 font-bold sm:justify-around sm:flex-row ff-nunito max-w-7xl sm:px-16 md:px-32">
				<button className="flex items-center flex-1 max-w-sm font-bold border-2 btn btn-outline btn-secondary group">
					contacto
					<IoMailOutline className="scale-150 ms-2" />
				</button>

				<Link
					href="https://wa.link/ygwmm6"
					target="_blank"
					className="flex-1 w-full max-w-sm "
				>
					<button className="flex items-center w-full max-w-sm font-bold border-2 btn btn-secondary text-primary group">
						WhatsApp
						<FaWhatsapp className="scale-150 ms-2" />
					</button>
				</Link>
			</div>
		</section>
	);
};

export default ContactSection;
