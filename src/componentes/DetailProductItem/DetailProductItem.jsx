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
  
      <Button variant='ghost' colorScheme='blue' fontWeight='bold' onClick={() => deleteProduct(id)}>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
};
export default DetailProduct;













