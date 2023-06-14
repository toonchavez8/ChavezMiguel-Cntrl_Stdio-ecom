export default function Contacto() {
	return (
		<main className="hero min-h-screen bg-base-200">
			<section className="hero-content flex-col lg:flex-row-reverse md:ps-10 prose">
				<div className="text-center lg:text-left md:ps-20">
					<h1 className="text-5xl font-bold">Contactanos!</h1>
					<p className="py-6">
						Estamos para ayudarte, no dudes en contactarnos para cualquier
						consulta. <br />
						Te responderemos a la brevedad.
					</p>
				</div>
				<article className="flex flex-col items-center justify-center  card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200 ">
					<form className="card-body form-control w-full ">
						<label className="label ">
							<span className="label-text text-accent font-medium">Nombre</span>
						</label>
						<input
							type="text"
							placeholder="Nombre"
							className="input input-bordered"
						/>
						<label className="label ">
							<span className="label-text text-accent font-medium">Email</span>
						</label>
						<input
							type="email"
							placeholder="Email"
							className="input input-bordered"
						/>
						<label className="label ">
							<span className="label-text text-accent font-medium">
								Mensaje
							</span>
						</label>

						<textarea
							placeholder="Mensaje"
							className="textarea textarea-bordered"
						></textarea>
						<button className="btn btn-primary mt-5">Enviar</button>
					</form>
				</article>
			</section>
		</main>
	);
}
