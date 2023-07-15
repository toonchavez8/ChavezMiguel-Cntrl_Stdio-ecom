export default function Foro() {
	return (
		<main className="">
			<section className="bg-base-100 w-full flex flex-col gap-10">
				<video
					src="https://res.cloudinary.com/duzeqpmgg/video/upload/v1689393884/Central/CentralEstudio_Foro_1920x1080_bey8lv.mp4"
					loop
					muted
					controls
					autoPlay
					className="w-full h-[500px] object-cover"
				></video>

				<div className=" w-full flex justify-center text-center  ">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">
							Ya conoces nuestro Foro?
						</h1>
						<p className="mb-5 text-left">
							La mejor ubicación a solo 1 cuadra de Av. Hidalgo y Av. Américas,
							más de 3.3 metros de altura, aire lavado, persianas black out,
							lobby, área de maquillaje y WiFi de 200 MB.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</section>
		</main>
	);
}
