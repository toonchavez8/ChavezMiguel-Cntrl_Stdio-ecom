import useFirebaseData from "../../utils/useFireBaseData.jsx";

const Foro = () => {
	const { data, loading, error } = useFirebaseData(
		"espacios",
		"Ciclorama Infinito"
	);

	if (loading) {
		return <div className="text-center mt-8">Loading...</div>;
	}

	if (error) {
		return (
			<div className="text-center mt-8 text-red-500">
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
			<section className="bg-white w-full flex flex-col gap-10">
				<video
					src="https://res.cloudinary.com/duzeqpmgg/video/upload/v1689393884/Central/CentralEstudio_Foro_1920x1080_bey8lv.mp4"
					loop
					muted
					controls
					autoPlay
					className="w-full h-[500px] object-cover"
				></video>

				<div className="w-full flex  justify-center text-center ">
					<div className="max-w-2xl prose">
						<h1 className="mb-5 text-5xl font-bold ff-barlow">{name}</h1>
						<p className="mb-5 text-left ff-nunito">{description}</p>
					</div>
				</div>

				<div className="max-w-7xl debug mx-auto mt-10">
					<img src={image} alt="name" className=" rounded w-1/2 mx-auto" />
					<h2 className="text-3xl font-semibold mb-5">Detalles del Foro</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{/* Render details using the data object */}
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="text-xl font-semibold mb-2">Área Blanca</h3>
							<p>{details.area}</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="text-xl font-semibold mb-2">Altura</h3>
							<p>{details.altura}</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary">
							<h3 className="text-xl font-semibold mb-2">Tiro</h3>
							<p>{details.tiro}</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary col-span-2">
							<h3 className="text-xl font-semibold mb-2">Ciclorama</h3>
							<p>{details.incluye.ciclorama.join(", ")}</p>
						</div>
					</div>
				</div>

				<div className="max-w-7xl mx-auto mt-10">
					<h2 className="text-3xl font-semibold mb-5 text-center">Horas</h2>

					<div className="grid grid-cols-5 sm:grid-cols-4 lg:grid-cols-5 gap-4">
						{/* Render hours using the data object */}
						<div className="p-4 rounded bg-white">
							<h3 className="text-xl font-semibold mb-2 ">Dias</h3>
							{dias.map((dia) => (
								<p key={dia}>{dia}</p>
							))}
						</div>
						{Object.entries(horas).map(([hora, precio]) => (
							<div key={hora} className="p-4 rounded bg-white">
								<h3 className="text-xl font-semibold mb-2">{hora}</h3>
								{Object.entries(precio).map(([tiempo, precio]) => (
									<p key={tiempo}>{`${tiempo}: ${precio}`}</p>
								))}
							</div>
						))}
						<div className="p-4 rounded bg-white row-span-2">
							<h3 className="text-xl font-semibold mb-2">1 Extra</h3>
							<p>${extra}</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Foro;
