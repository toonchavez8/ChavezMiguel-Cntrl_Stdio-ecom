import { Link } from "react-router-dom";
import useFirebaseData from "../../utils/useFireBaseData.jsx";
import { FaWhatsapp } from "react-icons/fa";

const Foro = () => {
	const { data, loading, error } = useFirebaseData(
		"espacios",
		"Ciclorama Infinito"
	);

	if (loading) {
		return <div className="mt-8 text-center">Loading...</div>;
	}

	if (error) {
		return (
			<div className="mt-8 text-center text-red-500">
				Error: {error.message}
			</div>
		);
	}

	const {
		details,
		description,
		name,
		image,
		hours: { horas, extra, dias },
	} = data;

	return (
		<main className="bg-white">
			<section className="flex flex-col w-full gap-10 bg-white">
				<video
					src="https://res.cloudinary.com/duzeqpmgg/video/upload/v1689393884/Central/CentralEstudio_Foro_1920x1080_bey8lv.mp4"
					loop
					muted
					controls
					autoPlay
					className="w-full h-[500px] object-cover"
				></video>

				<div className="flex justify-center w-full text-center ">
					<div className="max-w-2xl prose">
						<h1 className="mb-5 text-5xl font-bold ff-barlow">{name}</h1>
						<p className="mb-5 text-left ff-nunito">{description}</p>
					</div>
				</div>

				<div className="mx-auto mt-10 max-w-7xl debug">
					<img src={image} alt="name" className="w-1/2 mx-auto rounded " />
					<h2 className="mb-5 text-3xl font-semibold">Detalles del Foro</h2>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{/* Render details using the data object */}
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="mb-2 text-xl font-semibold">Área Blanca</h3>
							<p>{details.area}</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="mb-2 text-xl font-semibold">Altura</h3>
							<p>{details.altura}</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="mb-2 text-xl font-semibold">Tiro</h3>
							<p>{details.tiro}</p>
						</div>
						<div className="col-span-2 p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="mb-2 text-xl font-semibold">Ciclorama</h3>
							<p>{details.incluye.ciclorama.join(", ")}</p>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-10 mb-10 max-w-7xl">
					<h2 className="mb-5 text-3xl font-semibold text-center">Horas</h2>

					<div className="grid grid-cols-5 gap-4 sm:grid-cols-4 lg:grid-cols-5">
						{/* Render hours using the data object */}
						<div className="p-4 bg-white rounded">
							<h3 className="mb-2 text-xl font-semibold ">Dias</h3>
							{dias.map((dia) => (
								<p key={dia}>{dia}</p>
							))}
						</div>
						{Object.entries(horas).map(([hora, precio]) => (
							<div key={hora} className="p-4 bg-white rounded">
								<h3 className="mb-2 text-xl font-semibold">{hora}</h3>
								{Object.entries(precio).map(([tiempo, precio]) => (
									<p key={tiempo}>{`${tiempo}: ${precio}`}</p>
								))}
							</div>
						))}
						<div className="row-span-2 p-4 bg-white rounded">
							<h3 className="mb-2 text-xl font-semibold">1 Extra</h3>
							<p>${extra}</p>
						</div>
					</div>
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
			</section>
		</main>
	);
};

export default Foro;
