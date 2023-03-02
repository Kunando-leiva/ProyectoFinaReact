import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <header>
    <Link to="/" style={{color:"blue"}} >
    <h1>Api store</h1>
    </Link>
   </header>
    
  )
}

export default Header