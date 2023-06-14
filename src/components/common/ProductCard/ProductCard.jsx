import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		available: PropTypes.bool.isRequired,
		description: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
};

export default function ProductCard({ product }) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-10 pt-10">
				<img src={product.image} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{product.name}</h2>
				<p>{product.description}</p>

				<div className="card-actions">
					<Link to={`/itemdetail/${product.id}`}>
						<button className="btn btn-primary">Buy Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
