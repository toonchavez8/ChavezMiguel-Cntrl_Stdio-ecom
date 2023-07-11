import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import TotalComponent from "../components/cartPage/TotalComponent";
import CartCardComponent from "../components/cartPage/CartCardComponent";

export default function CartPage() {
	const { cartItems } = useContext(CartContext);

	console.log("cart", cartItems);

	return (
		<section className="pt-20">
			<h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
			<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
				{/* card section */}
				<div className="rounded-lg md:w-2/3">
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<CartCardComponent key={item.id} item={item} />
						))
					) : (
						<article className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
							<h2>Nothing in cart yet</h2>
						</article>
					)}
				</div>
				<TotalComponent cart={cartItems} />
			</div>
		</section>
	);
}
