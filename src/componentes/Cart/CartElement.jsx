import { Badge, Box, Button, Card, CardBody, CardFooter, Center, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {useContext} from 'react'
import { CartContext } from '../Context/CartContex';
import CartItemCounter from './cartItemCounter';
import CartTotal from './cartTotal';
import TotalItem from './totalItem';



const CartElement = () => {
    const{cart, setCart, saveLocal} = useContext(CartContext)
    console.log(cart);

    const eliminarProducto = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });
        setCart(newCart)
    }

  return cart.map((productId)=>{

    return(

      
    
    <Flex  key={productId.id}  
    alignItems="center"
    justifyContent="space-between" h="15rem"  w="80%" background="gray.300" m="6" borderRadius="2xl">
       <Image  p="2" h="14rem" w="10rem" src={productId.image} borderRadius="2xl" />
  
       <Flex  fontWeight='bold'>
    <Text w="15rem" mt="6" color="red">{productId.title}</Text>
      </Flex>


  <Flex  fontWeight='bold' flexDirection="column">

    <Flex  color="red">Cantidad</Flex>

    <Flex marginTop="8">
      <CartItemCounter   detail={productId} quanty={productId.quanty} />
    </Flex>
    
  </Flex>


    <Flex   fontWeight='bold' flexDirection="column">
      
      <Flex color="red">Subtotal</Flex>

      <Flex marginTop="8">
        <Text  fontSize="2xl"  marginTop="" textAlign="center"  >$ {Math.round (productId.price * productId.quanty)}</Text>    
      </Flex>

    </Flex>
  
  <Button w="10rem" onClick={() => eliminarProducto(productId.id)}  variant='solid' colorScheme='red' justifyItems="center" justifyContent="center">
     <h3 >eliminar 🗑</h3>
    </Button>
 </Flex>
 




 
  )}
  )};






















//         <Card key={productId.id}
//   direction={{ base: 'column', sm: 'row' }}
//   overflow='hidden'
//   variant='outline'
// >
//   <Image
  
//     objectFit='cover'
//     maxW={{ base: '100%', sm: '200px' }}
//     src={productId.image}
//     alt='Caffe Latte'
//   />

//   <Stack>
//     <CardBody>
//       <Heading size='md'>{productId.title}</Heading>

//       <Text py='2'>${productId.price * productId.quanty}
//       </Text>
//     </CardBody>
    

//     <CardFooter>
//       <Button variant='solid' colorScheme='blue'>
//         Buy Latte
//       </Button>
//     </CardFooter>

//     <CartItemCounter detail={productId} quanty={productId.quanty}/>

//     

    

//   </Stack>
 
   
// </Card>

//     )
//   })
// }

export default CartElement