import React, { useState } from "react"
import { Link, Route, Router, Routes } from "react-router-dom"
import Header from "./componentes/Header"
import Navbar from "./componentes/navbar/navbar"
import ProductContainer from "./componentes/ProductContainer/ProductContainer"
import DetailProducItem from "./componentes/DetailProductItem/DetailProductItem"
import Home from "./componentes/Home/Home"
import DetailProductItem from "./componentes/DetailProductItem/DetailProductItem"
import DetailProducContainer from "./componentes/DetailProductContainer/DetailProductContainer"
import { Switch } from "@chakra-ui/react"
import DetailProductContainer from "./componentes/DetailProductContainer/DetailProductContainer"

function App() {
  const [product, setProduct] = useState([]);
 

  return (
     
    <div className="App">
     
      <Header/>
      <Navbar/>
      

      
      
<Routes>
 
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/category/:categoryId" element={<ProductContainer/>}/>
  <Route exact path="/produc/:productId" element={<DetailProductContainer/>}/>

</Routes>











{/* <Link to={`/category/${category.id}`}>Navbar</Link> */}
  
     
 

    </div>
  )
}

export default App