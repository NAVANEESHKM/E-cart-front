import React, { useState,useEffect } from "react";
import "./OrderDetails.css";
import DetailsLayout from "../DetailsLayout/DetailsLayout";
function OrderDetails(){
    const [Orders,setOrders] = useState([]);
    useEffect(()=>{
        const email=localStorage.getItem("Email")
        fetch('http://localhost:3000/api/all',{
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
    },[]);

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