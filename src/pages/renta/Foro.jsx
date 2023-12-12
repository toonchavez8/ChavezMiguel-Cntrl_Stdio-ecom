export default function Foro() {
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

				<div className="w-full flex justify-center text-center">
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

				<div className="max-w-7xl mx-auto mt-10">
					<h2 className="text-3xl font-semibold mb-5">Detalles del Foro</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="p-4 border rounded hover:border-secondary hover:text-primary ">
							<h3 className="text-xl font-semibold mb-2">Área Blanca</h3>
							<p>4.4 x 8.15 m</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary ">
							<h3 className="text-xl font-semibold mb-2">Altura</h3>
							<p>Más de 3.3 m</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary ">
							<h3 className="text-xl font-semibold mb-2">Tiro</h3>
							<p>14 m</p>
						</div>
						<div className="p-4 border rounded hover:border-secondary hover:text-primary ">
							<h3 className="text-xl font-semibold mb-2">Ciclorama</h3>
							<p>Infinito Blanco</p>
						</div>

						<div className="p-4 border rounded hover:border-secondary hover:text-primary col-span-2">
							<h3 className="text-xl font-semibold mb-2">Incluye</h3>
							<p>
								2 Flashes Godox SK40011-V + Accesorios
								<br />
								Cicloramas: Blanco y Negro
								<br />
								Cicloramas de otros colores $500 + IVA por color
							</p>
						</div>
					</div>
				</div>

				<div className="max-w-7xl mx-auto mt-10">
					<h2 className="text-3xl font-semibold mb-5 text-center">Horas</h2>

					<div className="grid grid-cols-5 sm:grid-cols-4 lg:grid-cols-5 gap-4">
						<div className="p-4  rounded bg-white">
							<h3 className="text-xl font-semibold mb-2 ">Dias</h3>
							<p>Lun-Vier</p>
							<p>Sab-Dom</p>
						</div>
						<div className="p-4  rounded bg-white">
							<h3 className="text-xl font-semibold mb-2">3</h3>
							<p>1700</p>
							<p>2250</p>
						</div>
						<div className="p-4  rounded bg-white">
							<h3 className="text-xl font-semibold mb-2">5</h3>
							<p>2600</p>
							<p>3250</p>
						</div>
						<div className="p-4  rounded bg-white">
							<h3 className="text-xl font-semibold mb-2">10</h3>
							<p>3900</p>
							<p>4980</p>
						</div>
						<div className="p-4  rounded bg-white row-span-2">
							<h3 className="text-xl font-semibold mb-2">1 Extra</h3>
							<p>$550</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
