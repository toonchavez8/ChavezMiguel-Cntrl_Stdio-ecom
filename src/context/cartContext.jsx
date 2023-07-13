import { useState, createContext, useMemo } from "react";

export const CartContext = createContext();

// Context provider component
// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
	// State to store the cart items
	const [cartItems, setCartItems] = useState([]);

	// Function to add an item to the cart
	const addToCart = (newProduct) => {
		// check if new product has an id
		if (!newProduct.id) {
			throw new Error("Product must have an ID");
		}

		// we then check if it exits in cart
		let exists = productExistsInCart(newProduct.id);

		// if exits is true
		if (exists) {
			let newArray = cartItems.map((product) => {
				if (product.id === newProduct.id) {
					return {
						...product,
						quantity: newProduct.quantity,
					};
				} else {
					return product;
				}
			});
			setCartItems(newArray);
		} // Add item to cartItems state
		else {
			setCartItems((prevItems) => [...prevItems, newProduct]);
		}
	};

	// function to check if product exists using id
	function productExistsInCart(id) {
		let exists = cartItems.some((prod) => prod.id === id);

		return exists;
	}

	// set cart to empty array
	const clearCart = () => {
		setCartItems([]);
	};

	const removeProductById = (id) => {
		// filter out by id and return array
		let newProductArray = cartItems.filter((product) => product.id !== id);

		setCartItems(newProductArray);
	};

	const getTotalQuanityById = (id) => {
		let product = cartItems.find((prod) => prod.id === +id);
		return product?.quantity;
	};

	const changeProductQuantityInCart = (item, quantity) => {
		console.log("item:", item.name, item.quantity, "quantity", quantity);

		// filter out the item with same id
		let newArray = cartItems.filter((product) => product.id !== item.id);

		// add the updated item to the array
		newArray.push({
			...item,
			quantity: quantity,
		});

		// set the new array as cartItems state
		setCartItems(newArray);
	};

	// Memoize the context value to prevent unnecessary re-renders
	let contextValue = useMemo(() => {
		return {
			cartItems,
			addToCart,
			clearCart,
			removeProductById,
			getTotalQuanityById,
			changeProductQuantityInCart,
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems]);

	// Render the context provider and pass the context value to the children
	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;
