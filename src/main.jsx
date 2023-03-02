import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './componentes/Context/CartContex'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CartProvider>
    <ChakraProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
    </ChakraProvider>
    </CartProvider>
  </React.StrictMode>,
)
