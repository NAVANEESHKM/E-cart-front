import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import DetailsLayout from "../DetailsLayout/DetailsLayout";
import Skeleton from '@mui/material/Skeleton';

function OrderDetails() {
  const navigate = useNavigate();

  const token = localStorage.getItem("Token")

  const [Orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  function HelpNavigate() {
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
  useEffect(() => {
    const email = localStorage.getItem("Email")
    fetch('https://e-cart-backend-1gs2.onrender.com/api/all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then((jsonData) => {
        setOrders(jsonData.items);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [Orders]);
 

  return (
    <>
      <div className="orderdet">
        <h3 className="inner_det">PRODUCTS ORDERED</h3>
      </div>
      {isLoading ? (
        // Show the skeleton when loading
        <div className="skeleton1">
          <Skeleton width={150} height={600} />
          <Skeleton animation="wave" width={400} height={300} />
          <Skeleton animation="wave" width={400} height={300} />
          <Skeleton animation="wave" width={400} height={300} />
          <Skeleton animation="wave" width={400} height={300} />
          <br/>
          <br/>

          <br/>

          <br/>

        
        </div>
      ) : Orders.length ? (
        // Render content using map when Orders array is not empty
        Orders.map((Order) => (
          <DetailsLayout key={Order.id} attri={Order} />
        ))
      ) : (
        // Show a message when Orders array is empty
        <div className="nothing">
          <p>No orders have been placed yet.</p>
        </div>
      )}


    </>
  )
}


export default OrderDetails;