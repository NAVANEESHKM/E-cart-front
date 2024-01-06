import React from "react";
import "./DetailsLayout.css";
import "./pro.jpg"

const destroyer= async (props) => {
    const id=props.attri.phone;
    const email=localStorage.getItem("Email")
  try {
    const response = await fetch(`http://localhost:3000/api/deleteorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone:id,email:email})
    });

    if (response.ok) {
      console.log('Item deleted successfully');
      // Additional actions after deletion
    } else {
      console.error('Error:', response.statusText);
      // Error handling
    }
  } catch (error) {
    console.error('Error:', error);
    // Error handling
  }
};
       

function DetailsLayout(props){
          return(
            <>
               <div className="Detailmain"> 
                   <img className="img_deta" src={require('./order_pro.jpg')} alt="main"></img>
                   <div className="Detailinner">
                   <p className="head_det">Name</p>
                    <p className="info_det">{props.attri.name}</p>
                    <p className="head_det">Product</p>
                    <p className="info_det">{props.attri.product}</p>
                    <p className="head_det">Quantity</p>
                    <p className="info_det">{props.attri.quantity}</p>
                    <p className="head_det">Phone</p>
                    <p className="info_det">{props.attri.phone}</p>
                   
                   <button onClick={()=>destroyer(props)}className="butt_Det">CANCEL ORDER</button>
                    </div>
               </div>
            </>
          )
}

export default DetailsLayout;