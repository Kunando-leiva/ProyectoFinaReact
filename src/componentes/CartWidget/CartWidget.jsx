import React from 'react';
import { Icon, Box, Text } from "@chakra-ui/react";
import TotalItem from '../Cart/totalItem';


const CartWidget = () => {
  return (
    <Box position="relative" mr={10}>
     <Text fontSize="3xl" >🛒</Text>
     
      <Text>CARRITO</Text>
      
      <Box
        as="span"
        bg="teal.400"
        color="#fff"
        fontWeight="bold"
        rounded="full"
        size="10px"
        position="absolute"
        top="-8px"
        right="-8px"
        px="2"
        py="1"
      >
        <TotalItem/>
      </Box>
    </Box>
  )
}

export default CartWidget;
