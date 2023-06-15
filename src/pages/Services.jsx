export default function Services() {
	return (
		<main className="flex flex-col">
			<section className="bg-primary h-128 text-white flex flex-col items-center justify-center px-2 md:px-10 lg:px-20">
				<h1 className="text-2xl md:text-4xl lg:text-6xl ff-nunito self-start">
					Nuestros Servicios
				</h1>

				<div className="flex flex-col gap-2 md:flex-row md:gap-10 md:mt-10 md:justify-between w-full">
					<p className="capitalize">
						<span className="text-base md:text-2xl lg:text-3xl lg:px-5">
							01.
						</span>
						Fotografia y video
					</p>
					<p className="capitalize">
						<span className="text-base md:text-2xl lg:text-3xl lg:px-5">
							02.
						</span>
						Renta de props de cocina
					</p>
					<p className="capitalize">
						<span className="text-base md:text-2xl lg:text-3xl lg:px-5">
							03.
						</span>
						diseño
					</p>
				</div>
			</section>

			<section className="bg-secondary h-128">Clients</section>
		</main>
	);
}
