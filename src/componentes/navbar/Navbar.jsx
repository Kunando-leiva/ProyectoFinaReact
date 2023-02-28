import {Flex, IconButton} from '@chakra-ui/react'

import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Link, Route, Routes } from 'react-router-dom';
import ProductContainer from '../ProductContainer/ProductContainer';
import CartWidget from '../CartWidget/CartWidget';
import Home from '../Home/Home';


const Navbar = () => {
    return (
  <nav >
    <Flex className="container"backgroundColor="blackAlpha.800"color="red"maxW="auto"p="4"
      minWidth='max-content' 
      alignItems='center' 
      gap='2'
      justifyContent="space-between">

        <Link to="/">Home</Link>
        <Link to={`/category/men's clothing`}>men's clothing</Link>
        <Link to={`/category/women's-clothing`}> Women's Clothing</Link>
        <Link to={`/category/jewelery`}>Joyeria</Link>
        <Link to={`/category/electronics`}>electronics</Link>

        <CartWidget/>
    </Flex>

    
  </nav>


)
}

export default Navbar