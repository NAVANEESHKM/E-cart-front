import './Home.css';
import React, { useEffect, useState } from 'react';
import a from "./images/c4.jpg"
import b from "./images/m11.jpg"
import c from "./images/r1.jpg"
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../menubar/Menu';
import OrderMas from '../form/OrderMas';
import About from '../About/About';
import Products from '../Productsblock/Products';
import Thank from '../Thanks/Thank';
import Footer from '../Footer/Footer';
import Feedback from '../Feedback/Feedback';
import Helper from '../Helper/Helper';
import OrderDetails from "../OrderDetails/OrderDetails";
import Login_page from '../Login';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){
    const token=localStorage.getItem("Token")
    const navigate = useNavigate();

    const cont1="Peanut oil is used in cooking and is also used to make medicine. Peanut oil is high in monounsaturated good fat and low in saturated bad fat. This is believed to help prevent heart disease and lower cholesterol. Peanut oil might help to reduce fatty build up in blood vessels.";
    const cont2="Garam masala is a good spice; it prevents growth of cancer-causing radicals and can prevent colon cancer too. Garam masala is rich in anti inflammatory and anti-oxidative properties. This helps in restoring the health of the heart and reduces cholesterol."
    const cont3="Arborio rice is high in the starch, amylopectin. Upon cooking, this rice releases its natural starch, resulting in creamier, more luscious rice that is firmer and chewier when compared to regular rice such as long-grain basmati rice or jasmine rice. Of course, like all types of rice, arborio rice is 100% gluten-free.";
    const img1=[1,a,"PEANUT OIL",cont1];
    const img2=[2,b,"GARAM MASALA",cont2];
    const img3=[3,c,"ARBORIO RICE",cont3];
    function HelpNavigate(){
        navigate("/");
      }
    useEffect(() => {
        // Function to decode the token and update state
        const decodeToken = () => {
          try {
            const decoded = jwtDecode(token);
            console.log("Token not expired")
            // Check if the token has expired
            const isTokenExpired = decoded.exp * 1000 < Date.now();
      
            if (isTokenExpired) {
              console.log('Token has expired');
              HelpNavigate(); // Call HelpNavigate when the token is expired
            }
          } catch (error) {
            console.error('Error decoding token:', error);
          // HelpNavigate() // Use navigate within the Router scope
          }
        };
      
        // Call the decodeToken function when the component mounts
        decodeToken();
      });
    return(
        <>
           <Menu/> 
          <div id="aboutid">
          <About/>
            </div>
          <div id="productid" className='product_name'><h3>OUR PRODUCTS</h3></div>

          <div  className='block_home'>
          <Products   img={img1} />
          <Products  img={img2}/>
          <Products   img={img3}/>
          <Products   img={img1} />
          <Products  img={img2}/>
          

         </div>

        <Helper/>
          
           <Footer/>
        </>
    )
}

export default Home;