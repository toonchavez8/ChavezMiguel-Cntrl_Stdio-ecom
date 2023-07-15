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

	return (
		<div className="card w-full  bg-base-100 shadow-xl">
			<figure className="px-5 pt-5 aspect-w-1 aspect-h-1">
				<img
					src={product.image}
					alt="Shoes"
					className="rounded-xl object-cover aspect-square bg-base-200"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title text-xl">{product.name}</h2>
				<p className="text-base">{price}</p>

				<div className="card-actions">
					<Link to={`/itemdetail/${product.id}`}>
						<button className="btn btn-primary">Ver equipo</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
