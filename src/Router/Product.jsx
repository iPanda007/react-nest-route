import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
const linksStyle = ({isActive})=>{
    return {
        color:isActive?'red': '',
        fontWeight:isActive?'bold':'',
        textDecoration:isActive?'none':'',
    }
}
const Product = () => {
  return (
    <div>
       <h1>
          Product
       </h1>
       <nav>
       <NavLink to="featured" style={linksStyle}>Featured</NavLink>
       </nav>
       <Outlet/>
    </div>
  )
}

export default Product
