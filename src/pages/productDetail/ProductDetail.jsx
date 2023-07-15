import PropTypes from "prop-types";

import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductDetail({
	productSelected,
	addToCart,
	Quantity,
}) {
	console.log("productSelected", productSelected);
	const [quantity, setQuantity] = useState(Quantity || 1);

	const onAdd = () => {
		let data = {
			...productSelected,
			quantity: quantity,
		};

		addToCart(data);
		Swal.fire({
			position: "center",
			icon: "success",
			title: `${productSelected.name} agregado al carrito`,
			showConfirmButton: true,
			timer: 1500,
			// custum button color
			confirmButtonColor: "#151ff9",
		});
	};

	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleIncreaseQuantity = () => {
		if (quantity < productSelected.stock) {
			setQuantity(quantity + 1);
		}
	};

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
			<section className="flex flex-col items-center justify-center md:flex-row gap-10">
				<figure>
					<img src={productSelected.image} alt={productSelected.name} />
				</figure>
				<div className="flex flex-col gap-2 prose">
					<h1 className="mb-0">{productSelected.name}</h1>
					<div className="badge badge-accent badge-outline">
						{productSelected.category}
					</div>
					<p>{productSelected.description}</p>
					<p className="font-black uppercase mt-0">
						{formatter.format(productSelected.price)} mxn
					</p>

					<div className="flex items-center justify-center w-full border-gray-100 mb-2">
						<button
							className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
							onClick={handleDecreaseQuantity}
						>
							-
						</button>
						<input
							className="h-8 w-16 border bg-white text-center text-xs outline-none"
							type="number"
							min="1"
							max={productSelected.quantity}
							value={quantity}
							onChange={(e) => setQuantity(Number(e.target.value))}
						/>
						<button
							className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
							onClick={handleIncreaseQuantity}
						>
							+
						</button>
					</div>
					<button className="btn btn-primary" onClick={onAdd}>
						Agregar al carrito
					</button>
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
	addToCart: PropTypes.func.isRequired,
	Quantity: PropTypes.number,
};
