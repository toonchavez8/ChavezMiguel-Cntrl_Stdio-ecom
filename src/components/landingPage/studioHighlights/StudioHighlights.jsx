export default function StudioHighlights() {
	return (
		<section className="flex flex-col w-full items-center justify-center">
			<div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-5xl mt-12 md:mt-0">
				<h2 className=" text-xl max-w-lg md:text-3xl md:max-w-3xl ff-libre-baskerville px-6 text">
					El lugar ideal para tu producción de foto o video, con la mejor
					ubicación en Guadalajara.
				</h2>

				<article className="prose px-12 md:px-0 md:pe-6">
					<p className="md:mt-6">
						Siempre trataremos de hacerte sentir como en casa, te proporcionamos
						el espacio para que puedas crear y convertir tus ideas en imágenes
						impactantes.
					</p>
					<p className="border-b-4  border-accent max-w-fit">
						Tu renta incluye
					</p>

					<ul className="flex flex-wrap m-0 p-0">
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Ciclorama blanco y negro
						</li>
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Wifi simétrico de 200 MB
						</li>
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Primer carga de café de cortesía
						</li>
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Dispensador de agua fría y caliente
						</li>
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Frigobar
						</li>
						<li className="w-full sm:w-1/2  lg:w-1/4  p-2 md:p-0 md:px-3">
							Altavoz Bluetooth Bose
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
