import {useContext} from 'react'
import { CartContext } from '../Context/CartContex';
import CartElement from '../Cart/CartElement'
import CartTotal from './cartTotal'
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Cart.css"
import Swal from 'sweetalert2';


const CartContent = ({total}) => {
    const{cart, clearCart } = useContext(CartContext);

    const Checkout = async () => {
      const { value: accept } = await Swal.fire({
        title: 'Desea terminar la compra?',
        input: 'checkbox',
        inputPlaceholder:
          'Tilde y Precione el boton "Fonalizar Compra" para terminar la compra',
        confirmButtonText:
          'Finalizar Compra <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree with T&C' 
        }
      })
      
      if (accept) {
        Swal.fire("SU COMPRA FUE HECHA EXITOSAMENTE :)" )
       
      }clearCart()}
    

 return cart.length > 0 ? (

    <div className='carritocompras'>
    
    <h2 className='carritocomprastitulo'>carrito de compras</h2>
        
        
        <h2 className='detalledecompra' ><CartElement/></h2>

  <div className='carttotal'><CartTotal/></div>   
  

     

    <Button onClick={clearCart}  > Vaciar carrito </Button>
    
    <Button  variant='solid' colorScheme='green' onClick={Checkout}> Comprar </Button>
  

 
    

    </div>

 ): (
    <div>
        <h2>Tu carrito esta vacio</h2>
        <Link to="/">
        <Button>
        ⬅ volver al Home 
        </Button>
       </Link>
    </div>
   
    
  )
}

export default CartContent