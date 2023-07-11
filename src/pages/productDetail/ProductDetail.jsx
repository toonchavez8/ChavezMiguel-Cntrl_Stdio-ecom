import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ProductDetail.propTypes = {
	productSelected: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		available: PropTypes.bool.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
	addToCart: PropTypes.func.isRequired,
};

export default function ProductDetail({ productSelected, addToCart }) {
	const onAdd = () => {
		let data = {
			...productSelected,
		};

		addToCart(data);
	};

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
			<section className="flex flex-col items-center justify-center md:flex-row gap-10">
				<figure>
					<img src={productSelected.image} alt={productSelected.name} />
				</figure>
				<div className="flex flex-col gap-4 prose">
					<h1>{productSelected.name}</h1>
					<p>{productSelected.description}</p>
					<p>{productSelected.price}</p>
					<div className="badge badge-accent badge-outline">
						{productSelected.category}
					</div>
					<span></span>

					<button className="btn btn-primary" onClick={onAdd}>
						Agregar al carrito
					</button>
				</div>
			</section>
		</main>
	);
}
