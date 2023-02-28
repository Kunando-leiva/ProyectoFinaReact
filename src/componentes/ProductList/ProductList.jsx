import React from 'react'
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({products}) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
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
