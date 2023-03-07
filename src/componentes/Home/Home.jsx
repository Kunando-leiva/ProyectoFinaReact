import React from 'react'
import Banner from '../Banner/Banner'
import ProductContainer from '../ProductContainer/ProductContainer'


const Home = ({greeting}) => {
    
  return (
    <div>
      <Banner/>

    <div className='ProductoContainer'>
      <ProductContainer/>
    </div> 
        
    </div>
  )
}

export default Home