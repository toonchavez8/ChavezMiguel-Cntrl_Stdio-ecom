import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductDetail({ productSelected }) {
	const formatter = new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
	});

	return (
		<main className="flex flex-col items-center justify-center mt-28 ">
			<div className="text-sm breadcrumbs text-accent">
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/renta"}>Equipo</Link>
					</li>
					<li>
						<Link to={`/itemdetail/category/${productSelected.category}`}>
							{productSelected.category}
						</Link>
					</li>
				</ul>
			</div>
			<section className="flex flex-col items-center justify-center gap-10 md:flex-row">
				<figure>
					<img src={productSelected.image} alt={productSelected.name} />
				</figure>
				<div className="flex flex-col gap-2 prose">
					<h1 className="mb-0">{productSelected.name}</h1>
					<div className="badge badge-accent badge-outline">
						{productSelected.category}
					</div>
					<p>{productSelected.description}</p>
					<p className="mt-0 font-black uppercase">
						{formatter.format(productSelected.price)} mxn
					</p>

					<button className="btn btn-primary">Agregar al carrito</button>
				</div>
			</section>
		</main>
	);
}

ProductDetail.propTypes = {
	productSelected: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		image: PropTypes.string,
		description: PropTypes.string,
		category: PropTypes.string,
		available: PropTypes.bool,
		stock: PropTypes.number,
		quantity: PropTypes.number,
	}).isRequired,
};
