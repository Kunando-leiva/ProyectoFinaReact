import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContex";
import { CartEmpty } from "../CartEmpty/CartEmpty";
import ProductItem from "../ProductItem/ProductItem";

export const Cart = () => {
	const [Loading, setLoading] = useState(true);
  

	const { cart, quantityProduct, clearCart } = useContext(CartContext);

	const ProductInCart = quantityProduct();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return Loading ? (
		<Loading />
	) : ProductInCart === 0 ? (
		<CartEmpty />
	) : (
		<div className='cart--container'>
			<button className='cart--emptyButton' onClick={() => clearCart()}>
				VACIAR CARRITO
			</button>
			<Link to='/checkout' className='cart--checkout'>
				FINALIZAR COMPRA! 
			</Link>
			{cart.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default Cart

