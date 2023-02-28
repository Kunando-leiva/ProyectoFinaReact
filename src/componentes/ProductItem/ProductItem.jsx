import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const ProductItem = ({image, title, description, price, id, deleteProduct}) => {
  
  return (
  
    
    <Link to={`/product/${id}`}>
    
   <Card maxW="sm" key={id}>
  <CardBody>
  
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />

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