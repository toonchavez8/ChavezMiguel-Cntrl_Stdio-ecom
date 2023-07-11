import { useContext, useMemo } from "react";
import { IconContext } from "react-icons";
import { BsFillBasketFill } from "react-icons/bs";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

export default function CartWidget() {
	const cartWidgetStyle = useMemo(
		() => ({
			className: "cart-widget text-2xl",
		}),
		[]
	);

	const { cartItems } = useContext(CartContext);

	//get total number of items in cart

	let totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<Link to={`/cart`}>
			<button className="cart-widget-Container">
				<IconContext.Provider value={cartWidgetStyle}>
					<BsFillBasketFill />
				</IconContext.Provider>
				<span className="cart-widget-Counter">{totalItems}</span>
			</button>
		</Link>
	);
}
