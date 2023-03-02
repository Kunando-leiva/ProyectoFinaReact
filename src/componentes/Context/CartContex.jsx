import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const addToCart = (product, quantity) => {
		if (isInCart(product.id)) {
			const productInCart = cart.find((it) => it.id === product.id);
			productInCart.quantity = productInCart.quantity + quantity;
			setCart([...cart]);
		} else {
			product.quantity = quantity;
			setCart([...cart, product]);
		}
		AddToCartAlert(product.title, quantity);
	};

	const quantityProduct = () => {
		return cart.reduce((totalQ, prod) => totalQ + prod.quantity, 0);
	};

	const totalCart = () => {
		return cart.reduce(
			(totalP, prod) => totalP + prod.quantity * prod.price,
			0
		);
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const removeProduct= (id) => {
		setCart(cart.filter((product) => product.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				totalCart,
				quantityProduct,
				addToCart,
				clearCart,
				removeProduct,
			}}>
			{children}
		</CartContext.Provider>
	);
};