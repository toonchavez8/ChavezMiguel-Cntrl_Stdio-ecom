import { useState, createContext, useMemo } from "react";

export const CartContext = createContext();

// Context provider component
// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
	// State to store the cart items
	const [cartItems, setCartItems] = useState([]);

	// Function to add an item to the cart
	const addToCart = () => {
		// Add item to cartItems state
		console.log("added to cart");
	};

	// Memoize the context value to prevent unnecessary re-renders
	const contextValue = useMemo(() => {
		return {
			cartItems: cartItems,
			addToCart: addToCart,
		};
	}, [cartItems]);

	// Render the context provider and pass the context value to the children
	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;
