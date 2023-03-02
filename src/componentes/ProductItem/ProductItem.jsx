import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import DetailProductContainer from '../DetailProductContainer/DetailProductContainer';

const ProductItem = ({image, title, description, price, id, productid,detail}) => {
  
  return (
  
    
    
      <Link to={`/products/${id}`}>
    
   <Card maxW="sm" >
  <CardBody>
  
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />

    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
     
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Link>
  );
};

export default ProductItem;