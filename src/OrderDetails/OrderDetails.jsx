import React, { useState,useEffect } from "react";
import "./OrderDetails.css";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import DetailsLayout from "../DetailsLayout/DetailsLayout";
function OrderDetails(){
    const navigate = useNavigate();

    const token=localStorage.getItem("Token")

    const [Orders,setOrders] = useState([]);
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
    useEffect(()=>{
        const email=localStorage.getItem("Email")
        fetch('https://e-cart-backend-1gs2.onrender.com/api/all',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email})
        })
            .then(response => response.json())
            .then((jsonData) => {
                setOrders(jsonData.items);
            })
        .catch((error) => {
            console.error(error)
        })
    },[Orders]);

      return(
        <>
        <div  className="orderdet">
               <h3 className="inner_det">PRODUCTS ORDERED</h3>
        </div>

        {
            (Orders.length)?
            Orders.map((Order)=>{
                return(
                  <DetailsLayout key="1" attri={Order}/>
               
                )
            }):<div className="nothing"><p>No Order yet placed</p></div>
                
            
        }
        
          
        </>
      )
}


export default OrderDetails;