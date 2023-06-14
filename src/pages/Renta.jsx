import ProductListContainer from "../components/common/ProductList/ProductListContainer";

export default function Renta() {
	return (
		<main className="flex flex-col w-full items-center justify-center">
			<section className="hero h-160 bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ytimg.com/vi/Fcl93uTSEmw/maxresdefault.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
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
