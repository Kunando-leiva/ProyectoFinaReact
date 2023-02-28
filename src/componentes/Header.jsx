import React from 'react'
import { Link } from 'react-router-dom'
import DetailProductItem from './DetailProductItem/DetailProductItem'
import ProductList from './ProductListContainer'
import ProductItem from './ProductItem/ProductItem'

const Header = ({image}) => {
  return (
   <header>
    <Link to="/" style={{color:"blue"}} >
    <h1>Api store</h1>
    </Link>
   </header>
    
  )
}

export default Header