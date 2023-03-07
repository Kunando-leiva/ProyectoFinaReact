import React, { useState } from "react"
import {  Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./componentes/navbar/Navbar"
import ProductContainer from "./componentes/ProductContainer/ProductContainer"
import Home from "./componentes/Home/Home"
import DetailProductContainer from "./componentes/DetailProductContainer/DetailProductContainer"
import CartContent from "./componentes/Cart/CartContent"




function App() {
 

  return (
     
  <div className="App">
  
  <Navbar/>
  
<Routes>
  <Route exact path="/" element={<Home greeting="Bienvenido a nuestra tienda!"/>} />
  <Route exact path="/category/:categoryId" element={<ProductContainer greeting="Encuentra los mejores productos aquí!" />}/>
  <Route path="/products/:productId" element={<DetailProductContainer greeting="Revisa los detalles del producto aquí!"/>}/>
  <Route path="/carrito" element={<CartContent/>}/>
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

</div>
  )
}

export default App