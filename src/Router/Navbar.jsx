import React from 'react'
import { Link,NavLink } from 'react-router-dom'


const linkStyles = ({isActive})=>{
   return {
     color:isActive?'#2cc79e':'black',
     background:isActive?"#fff":'none',
     textDecoration:isActive?"none":"none",
     boxShadow:isActive?"0 0 4px rgba(0,0,0,0.1)":"none"
   }
}

const Navbar = () => {
  return (
    <div>
       <nav>
         <NavLink to="/" style={linkStyles}>Home</NavLink>
         <NavLink to="/about" style={linkStyles}>About</NavLink>
         <NavLink to='/product' style={linkStyles}>Product</NavLink>
       </nav>
    </div>
  )
}

export default Navbar
