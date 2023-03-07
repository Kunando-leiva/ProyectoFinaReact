
import React from 'react'
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({products}) => {

 
  return (
   
    <div className='ProductoContainer'>
       
      {products.map(product => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          category={product.category}
        />


      ))}
    </div>
    
  )
}

export default ProductList;
