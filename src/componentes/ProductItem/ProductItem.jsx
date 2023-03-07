import { Button, Card, CardBody, CardFooter, Center, Container, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Link} from 'react-router-dom';

 



const ProductItem = ({image, title,  price, id }) =>{

  return (

    
   

   <Card w="26rem"  m="3" border="1px" >
   
  <CardBody background="black" >

  <Link to={`/products/${id}`}>
    <Center>
    <Image
   h="30rem"
   w="80rem"
      src={image}
      alt={title}
      borderRadius='lg'/>
    </Center>
  </Link>

    <Stack mt='6' spacing='3'>
      <Heading size='md'
      h="5rem"
      >{title}
      </Heading>
     
    <Text color='blue.600' fontSize='3xl'>
        ${price}
    </Text>
    </Stack>
    <CardFooter justifyContent="center">
      <Link to={`/products/${id}`}>
      <Button fontSize='2xl' variant='solid' colorScheme='blue' alignContent="center" >
      Detalle del Producto
      </Button>
      </Link>
      </CardFooter>
    
</CardBody>
 
<Center>
  
    
    
    
    
    
  
  </Center>

</Card>


  );
};

export default ProductItem;