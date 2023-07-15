import ProductCard from "../ProductCard/ProductCard";

// prop validation

import PropTypes from "prop-types";

ProductList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			category: PropTypes.string,
			available: PropTypes.bool.isRequired,
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default function ProductList({ products }) {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 py-12 mx-12 sm:mx-24">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	);
}
