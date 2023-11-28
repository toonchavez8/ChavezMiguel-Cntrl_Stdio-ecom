import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		category: PropTypes.string,
		available: PropTypes.bool.isRequired,
		description: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
};

export default function ProductCard({ product }) {
	const price = product.price.toLocaleString("en-US", {
		style: "currency",
		currency: "MXN",
	});

	let quantityText;
	let quantityBadgeClass;

	switch (product.quantity) {
		case 0:
			quantityText = "Sin stock";
			quantityBadgeClass = "badge badge-error";
			break;
		case 1:
			quantityText = "1 unidad disponible";
			quantityBadgeClass = "badge badge-accent badge-outline";
			break;
		default:
			quantityText = `${product.quantity} unidades disponibles`;
			quantityBadgeClass = "badge badge-primary badge-outline";
			break;
	}

	if (product.name.toLowerCase().includes("color")) {
		quantityText = "Variedad de colores";
		quantityBadgeClass = "badge badge-primary badge-outline";
	}

	return (
		<div className="card w-full  ">
			<figure className="px-5 pt-5 aspect-w-1 aspect-h-1">
				<img
					src={product.image}
					alt="Shoes"
					className="rounded-xl object-cover aspect-square bg-base-200"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<div className="">
					<h2 className="card-title text-xl">{product.name}</h2>
					<small className={`card-text text-sm ${quantityBadgeClass}`}>
						{quantityText}
					</small>
				</div>
				<p className="text-base font-medium text-accent">{price}</p>

				<div className="card-actions">
					<Link to={`/itemdetail/${product.id}`}>
						<button className="btn btn-primary">Ver equipo</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
