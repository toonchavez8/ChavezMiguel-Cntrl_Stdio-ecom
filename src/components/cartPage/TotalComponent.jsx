import { useEffect, useState } from "react";

export default function TotalComponent({ cart }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalWithTax, setTotalWithTax] = useState(0);

	useEffect(() => {
		const calculateTotal = () => {
			const subtotal = cart.reduce((acc, curr) => {
				return acc + curr.price * curr.quantity;
			}, 0);
			const tax = subtotal * 0.16;
			setTotalPrice(subtotal);
			setTotalWithTax(subtotal + tax); // Adding shipping (assuming it's a fixed amount)
		};

		calculateTotal();
	}, [cart]);

	const formatter = new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
	});

	return (
		<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
			<div className="mb-2 flex justify-between">
				<p className="text-gray-700">Subtotal</p>
				<p className="text-gray-700">{formatter.format(totalPrice)}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-gray-700">IVA (16%)</p>
				<p className="text-gray-700">{formatter.format(totalPrice * 0.16)}</p>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between">
				<p className="text-lg font-bold">Total</p>
				<div>
					<p className="mb-1 text-lg font-bold">
						{formatter.format(totalWithTax)}
					</p>
					<p className="text-sm text-gray-700">incluye IVA</p>
				</div>
			</div>
			<button className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-accent">
				Rentar
			</button>
		</div>
	);
}
