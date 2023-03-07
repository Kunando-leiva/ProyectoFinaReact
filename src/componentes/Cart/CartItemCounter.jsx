import { Button } from '@chakra-ui/react';
import {useContext} from 'react'
import { CartContext } from '../Context/CartContex';


const CartItemCounter = ({detail, quanty}) => {
    const{cart, setCart, AgregaralCarrito} = useContext(CartContext);



    const resta =() =>{
        const productrepeat = cart.find((item) => item.id === detail.id);
        productrepeat.quanty !== 1 && setCart(cart.map((item)=> (item.id === detail.id ? 
            {...detail, quanty: productrepeat.quanty - 1} : item)))
        };

        

  return (
    <>
    <Button onClick={resta}>-</Button>  
    <h3>{quanty}</h3>
    <Button onClick={()=> AgregaralCarrito(detail)} >+</Button>
    </>
  )
}

export default CartItemCounter