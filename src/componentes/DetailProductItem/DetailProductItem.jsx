import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const DetailProduct = ({image, title, description, price, id, deleteProduct}) => {
  
  return (
    <Card maxW="sm" key={id}>
  <CardBody>
    <Image
      src={image}
      alt={title}
      borderRadius='lg' />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        comprar
      </Button>
      
      <Button variant='solid' colorScheme='blue'>
        Edit
      </Button>
      <Button variant='ghost' colorScheme='blue' fontWeight='bold' onClick={() => deleteProduct(id)}>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
};
export default DetailProduct;













// import {
//     Image,
//     Text,
//     Heading,
//     Stack,
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     Center,
//   } from "@chakra-ui/react";
//   import { useLocation } from "react-router-dom";
  
  
//   const DetailProducItem = ({ product }) => {
//     console.log('La propiedad id está definida: ', product.id);
//     const idProducto = useLocation().pathname.split("/")[2];
//     const Producto = product[idProducto];
   
  
//     if (!product) {
//       return <div>Producto no encontrado</div>;
//     }
  
//     const { image, title, description, price } = product;
  
//     return ( 
  
    
//       <Center m="2%"> 
     
//       <Card
//     direction={{ base: 'column', sm: 'row' }}
//     overflow='hidden'
//     variant='outline'
//     alignItems="center"
    
  
//   >
//     <Image
//       objectFit='cover'
//       maxW={{ base: '100%', sm: '350px' }}
//       src={image}
//       alt='Caffe Latte'
//     />
    
  
//     <Stack>
//       <CardBody >
//         <Heading size='3xl'>{title}</Heading>
  
//         <Text fontSize="2xl" py='8'>
//          {description}
//         </Text>
  
  
//         <Text py='2' fontSize="3xl">
//          $$$${price}
//         </Text>
//       </CardBody>
  
//       <CardFooter>
//         <Button variant='solid' colorScheme='red' size='lg'>
//           Mandar al Carrito
//         </Button>
  
//         <Button variant='solid' colorScheme='blue' size='lg' ml="30">
//          Comprar Ahora
//         </Button>
//       </CardFooter>
//     </Stack>
//   </Card>
//   </Center>
   
//     );
//   };
  
//   export default DetailProducItem;