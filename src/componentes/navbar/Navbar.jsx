import {Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';



const Navbar = () => {
    return (
  <nav >
    
    <Flex className="container"backgroundColor="blackAlpha.800"color="red" maxW="100%" p="2" 
      alignItems='center' 
      gap='2'
      justifyContent="space-between">

        <Link to="/">Home</Link>
        <Link to={`/category/men's clothing`}>men's clothing</Link>
        <Link to={`/category/women's clothing`}> Women's Clothing</Link>
        <Link to={`/category/jewelery`}>Joyeria</Link>
        <Link to={`/category/electronics`}>electronics</Link>
        <Link to={`/carrito `}><CartWidget/></Link>

        
    </Flex>

    
  </nav>


)
}

export default Navbar