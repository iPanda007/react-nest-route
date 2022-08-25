import React from 'react'
 import { NavLink as ActiveLink,Outlet as Show} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <ActiveLink to="featured">go to feature</ActiveLink>
        <div>
           <Show/>
        </div>
    </div>
  )
}

export default Product
