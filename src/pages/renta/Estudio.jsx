import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Estudio() {
	return (
		<main className="">
			<section className="flex flex-col w-full gap-10 bg-base-100">
				<video
					src="https://res.cloudinary.com/duzeqpmgg/video/upload/v1689393888/Central/CentralEstudio_Estudio_1920x1080_lnizo8.mp4"
					loop
					muted
					controls
					autoPlay
					className="w-full h-[500px] object-cover"
				></video>

				<div className="flex justify-center w-full mb-10 text-center ">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">
							Ya conoces nuestro estudio?
						</h1>
						<p className="mb-5 text-left">
							La mejor ubicación a solo 1 cuadra de Av. Hidalgo y Av. Américas,
							más de 3.3 metros de altura, aire lavado, persianas black out,
							lobby, área de maquillaje y WiFi de 200 MB.
						</p>
						<Link
							href="https://wa.link/ygwmm6"
							target="_blank"
							className="flex-1 w-full max-w-sm mb-5 "
						>
							<button className="flex items-center w-full max-w-sm font-bold border-2 btn btn-secondary text-primary group">
								Réntalo ahora
								<FaWhatsapp className="scale-150 ms-2" />
							</button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
