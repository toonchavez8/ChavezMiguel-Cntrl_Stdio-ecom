import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CartCardComponent.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
	removeProductById: PropTypes.func.isRequired,
};

export default function CartCardComponent({ item, removeProductById }) {
	const [quantity, setQuantity] = useState(item.quantity, 0); // Example initial quantity value

	const handleQuantityChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const formatter = new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
	});

	const priceInMXN = formatter.format(item.price);

	// function to removeproduct by id
	const handleRemovedById = (item) => {
		const id = item.id;

		removeProductById(id);
	};

	return (
		<article className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
			<img
				src={item.image}
				alt={`${item.name} image`}
				className="w-full rounded-lg sm:w-40"
			/>
			<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
				<div className="mt-5 sm:mt-0">
					<Link to={`/itemdetail/${item.id}`}>
						<h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
					</Link>
					<p className="mt-1 text-xs text-gray-700">{item.description}</p>
				</div>
				<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
					<div className="flex items-center border-gray-100">
						<button
							className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
							onClick={handleDecreaseQuantity}
						>
							-
						</button>
						<input
							className="h-8 w-8 border bg-white text-center text-xs outline-none"
							type="number"
							value={quantity}
							min="1"
							onChange={handleQuantityChange}
						/>
						<button
							className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
							onClick={handleIncreaseQuantity}
						>
							+
						</button>
					</div>
					<div className="flex items-center space-x-4">
						<p className="text-sm">{priceInMXN}</p>
						<button onClick={() => handleRemovedById(item)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}
