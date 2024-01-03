import React from 'react'
import './App.css';

import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shopping from './pages/Shopping';
import SignupLogin from './pages/SignupLogin';
import Carting from './pages/Carting';
import ShoppingCategory from './pages/ShoppingCategory';
// import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import Products from './pages/Products';
export default function App() {
  return (
    <div>
     
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shopping/>}/>
        <Route path='/mens' element={<ShoppingCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShoppingCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShoppingCategory  banner={kids_banner} category="kid"/>}/>
        {/* <Route path='/product' element={<Products/>}>
          <Route path='/productId' element={<Products/>}/>
        </Route> */}
        <Route path='/product/:productId' element={<Products/>}/>
        <Route path='/cart' element={<Carting/>}/>
        <Route path='/login' element={<SignupLogin/>}/>
        
        
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}
