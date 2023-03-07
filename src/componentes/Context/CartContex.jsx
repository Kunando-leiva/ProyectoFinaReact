import React, { createContext, useContext, useEffect, useState } from "react";
import CartContent from "../Cart/CartContent";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

		const AgregaralCarrito = ( detail) => {
            const productrepeat = cart.find((item) => item.id === detail.id);

            if (productrepeat){
                setCart(cart.map((item)=> (item.id === detail.id ? { ...detail, quanty:
                productrepeat.quanty + 1} : item)))
            }else{
                setCart([...cart, detail]); 
                console.log( detail)
            }
		}
		
		const clearCart = () => {
			setCart([]);
		};

		const saveLocal =() => {
			localStorage.setItem("carrito", JSON.stringify(CartContent))
		  }




		return (
		<CartContext.Provider value={{cart, setCart, AgregaralCarrito, clearCart, saveLocal
		}}>{children}
		</CartContext.Provider>
		);


		

	};
	export default CartProvider;