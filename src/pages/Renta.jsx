import ProductListContainer from "../components/common/ProductList/ProductListContainer";

export default function Renta() {
	return (
		<main className="flex flex-col w-full items-center justify-center">
			<section className="hero h-160 bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://scontent.fgdl13-1.fna.fbcdn.net/v/t39.30808-6/305661496_774056190656546_4891504921778261826_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=WIfoZy2KRMYAX-bdlqQ&_nc_ht=scontent.fgdl13-1.fna&oh=00_AfBZaldLEB_mL2raYrJInhxiszcxT_IPo8Qaotr0QkQJ0Q&oe=648E49A8"
						className="w-full max-h-96 rounded-lg shadow-2xl object-cover "
					/>
					<div>
						<h1 className="text-5xl font-bold">Pagina de renta!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</section>

			<ProductListContainer />
		</main>
	);
}
