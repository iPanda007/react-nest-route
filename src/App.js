import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './Router/About'
import FeatureProduct from './Router/FeatureProduct'
import Home from './Router/Home'
import Navbar from './Router/Navbar'
import OrderSummary from './Router/OrderSummary'
import Product from './Router/Product'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='order-summary' element={<OrderSummary/>}></Route>
            <Route path='product' element={<Product/>} >
                 <Route path='featured' element={<FeatureProduct/>}></Route>
            </Route>
            <Route></Route>
        </Routes>
    </div>
  )
}

export default App
