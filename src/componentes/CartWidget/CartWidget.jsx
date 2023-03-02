import React from 'react';
import { Icon, Box, Text } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Box position="relative" mr={10}>
      <Icon name="shopping-cart" />
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
        <Text fontSize="xs">33</Text>
      </Box>
    </Box>
  )
}

export default CartWidget;
