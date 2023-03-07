import React, { useContext } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';


const DetailProduct = ({image, title, description, price, id,Product}) => {


  return (
    <Card maxW="sm" id={id}>
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

</Card>
  );
};
export default DetailProduct;








