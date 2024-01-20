
import { useState,useEffect } from "react";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import React from "react";
import { Link as DomLink } from "react-router-dom";

import './OrderMas.css';
import { Link } from "react-router-dom";


function Order_Mas(props){
  const navigate = useNavigate();

  const token=localStorage.getItem("Token")

const [name,setName]=useState('');
const [quantity,setquantity]=useState('');
const [product,setproduct]=useState('');
const[phone,setphone]=useState('');
function HelpNavigate(){
  navigate("/");
}

useEffect(() => {
  // Function to decode the token and update state
  const decodeToken = () => {
    try {
      const decoded = jwtDecode(token);
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
const handleSubmit = (e) => {
  e.preventDefault();
  const email=localStorage.getItem("Email")
  // Convert form data to JSON
  const formData = {
    email,
    name,
    product,
    quantity,
    phone
  };
  

  // Send JSON data to the server
  fetch('https://e-cart-backend-1gs2.onrender.com/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle response from the server
      console.log(data);
      console.log("data send");
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });

  
};
    return(
    
      <div className="blocker"  > 
        <h1>ORDER PLEASE</h1>
        <div className="innerblock">                                                             
           <form className="form">
             <h3>NAME</h3>
             <input className="enter" type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
             <h3>PRODUCTS</h3>
             <select className="enter" type="text" name="product" value={product} onChange={e => setproduct(e.target.value)} required>
                        <option key="1" value="">-- Select --</option>
                        <option key="2" value="peanut oil">Peanut Oil</option>
                        <option key="3" value="coconut oil">Coconut Oil</option>
                        <option key="4" value="avocado oil">Avocado Oil</option>
                        <option key="5" value="garam masala">Garam Masala</option>
                        <option key="6" value="tandoori masala">Tandoori Masala</option>
                        <option key="7" value="chaat masala">Chaat Masala</option>
                        <option key="8" value="basmathi rice">Basmathi Rice</option>
                        <option key="9" value="bomba rice">Bomba Rice</option>
                        <option key="10" value="arborio rice">Arborio Rice</option>
             </select>
             <h3>QUANTITY</h3>
             <input className="enter" type="number" name="quantity" value={quantity} onChange={e => setquantity(e.target.value)} required />
             <h3>PHONE</h3>
             <input className="enter" type="tel" name="phone" value={phone} onChange={e => setphone(e.target.value)} required/><br/>
              <button className="end_butt" onClick={(e)=>{handleSubmit(e); }} type="submit">Submit</button>
             {/* <h3>PRODUCT</h3>
             <select className="input">
                 <option>PLEASE SELECT</option>
                 <option>OIL</option>
                 <option>MASALA</option>
                 <option>WHEET</option>
             </select>
             <h3>QUANTITY</h3>
             <input className="input" type="text"></input><br/><br/>
             <Link to="/thank"><button className="butt2">ORDER</button></Link> */}
           </form>
           </div>
       </div>
       
    );
}

export default Order_Mas;