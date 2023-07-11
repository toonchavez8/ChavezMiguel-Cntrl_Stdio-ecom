import ProductCard from "../ProductCard/ProductCard";

// prop validation

import PropTypes from "prop-types";

ProductList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			available: PropTypes.bool.isRequired,
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default function ProductList({ products }) {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12  	">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	);
}