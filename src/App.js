import './App.css';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, animateScroll as scroll } from "react-scroll";
let decide=0;
function App() {

  const a=require('./c4.jpg');
  const b=require('./m11.jpg');
  const c=require('./r1.jpg');
  const cont1="Peanut oil is used in cooking and is also used to make medicine. Peanut oil is high in monounsaturated good fat and low in saturated bad fat. This is believed to help prevent heart disease and lower cholesterol. Peanut oil might help to reduce fatty build up in blood vessels.";
  const cont2="Garam masala is a good spice; it prevents growth of cancer-causing radicals and can prevent colon cancer too. Garam masala is rich in anti inflammatory and anti-oxidative properties. This helps in restoring the health of the heart and reduces cholesterol."
  const cont3="Arborio rice is high in the starch, amylopectin. Upon cooking, this rice releases its natural starch, resulting in creamier, more luscious rice that is firmer and chewier when compared to regular rice such as long-grain basmati rice or jasmine rice. Of course, like all types of rice, arborio rice is 100% gluten-free.";
  const img1=[1,a,"PEANUT OIL",cont1];
  const img2=[2,b,"GARAM MASALA",cont2];
  const img3=[3,c,"ARBORIO RICE",cont3];
  

  return (
 
    
    <Router>
      
      <Routes>
          <Route path="/" element={<div><Menu/> 
          <div id="aboutid">
          <About/>
            </div>
          <div id="productid" className='product_name'><h3>OUR PRODUCTS</h3></div>

          <div  className='block'>
          <Products   img={img1} />
          <Products  img={img2}/>
          <Products   img={img3}/>
         </div>

        <Helper/>
          
           <Footer/>
           
       </div>}/>
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