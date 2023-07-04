import React, { useState,useEffect } from "react";
import "./OrderDetails.css";
import DetailsLayout from "../DetailsLayout/DetailsLayout";
function OrderDetails(){
    const [Orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://e-cart-backend-1gs2.onrender.com/api/all')
            .then(response => response.json())
            .then((jsonData) => {
            // jsonData is parsed json object received from url
                setOrders(jsonData);
                // console.log(Orders);
            })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
    });

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