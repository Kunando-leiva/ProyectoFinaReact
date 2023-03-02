import React, { useState } from "react"
import { Link, Route, Router, Routes } from "react-router-dom"
import Header from "./componentes/Header"
import Navbar from "./componentes/navbar/navbar"
import ProductContainer from "./componentes/ProductContainer/ProductContainer"
import Home from "./componentes/Home/Home"
import { Switch } from "@chakra-ui/react"
import DetailProductContainer from "./componentes/DetailProductContainer/DetailProductContainer"
import Cart from "./componentes/cart/cart"


function App() {
  const [product, setProduct] = useState([]);
 

  return (
     
    <div className="App">
     
      <Header/>
      <Navbar/>
      

      
      
<Routes>
 
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/category/:categoryId" element={<ProductContainer/>}/>
  <Route path="/products/:productId" element={<DetailProductContainer/>}></Route>
  <Route path="/carrito" element={<Cart/>}/>


</Routes>

  
     
 

    </div>
  )
}

export default App