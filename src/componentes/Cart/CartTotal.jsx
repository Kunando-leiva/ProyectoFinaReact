import { Button } from '@chakra-ui/react';
import {useContext} from 'react'
import { CartContext } from '../Context/CartContex';

const CartTotal = () => {
    const{cart} = useContext(CartContext)
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty , 0);
  return (
    <div>
        <Button variant='solid' colorScheme='green' total={total}>${Math.round(total)}</Button> 
    </div>
  )
}

export default CartTotal