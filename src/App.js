import './App.css';
import React, { useEffect, useState } from 'react';

import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menubar/Menu';
import OrderMas from './form/OrderMas';
import About from './About/About';
import Products from './Productsblock/Products'
import Thank from './Thanks/Thank'
import Footer from './Footer/Footer';
import Feedback from './Feedback/Feedback';
import Helper from './Helper/Helper';
import OrderDetails from "./OrderDetails/OrderDetails";
import Login_page from './Login';
import Home from "./Home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, animateScroll as scroll } from "react-scroll";
let decide=0;


function App() {

 

  return (
 
    
    <Router>
      
      <Routes>
         <Route path="/" element={<Login_page/>}/>
          <Route path="front" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/Order" element={<OrderMas/>}/>
          <Route path="/thank" element={<Thank/>}/>
          <Route path="/details" element={<OrderDetails/>}/>
      </Routes>
    </Router>
    
       
  );
}

export default App;