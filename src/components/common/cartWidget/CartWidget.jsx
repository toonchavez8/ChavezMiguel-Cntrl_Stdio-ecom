import { useMemo } from "react";
import { IconContext } from "react-icons";
import { BsFillBasketFill } from "react-icons/bs";
import "./CartWidget.css";

export default function CartWidget() {
	const cartWidgetStyle = useMemo(
		() => ({
			className: "cart-widget text-2xl",
		}),
		[]
	);

	return (
		<button className="cart-widget-Container">
			<IconContext.Provider value={cartWidgetStyle}>
				<BsFillBasketFill />
			</IconContext.Provider>

			<span className="cart-widget-Counter">0</span>
		</button>
	);
}
