import React from "react";
import "./DetailsLayout.css";
import "./pro.jpg"

const destroyer= async (props) => {
    const id=props.attri._id;
    console.log(id);
  try {
    const response = await fetch(`https://e-cart-backend-1gs2.onrender.com/api/${id}`, {
      method: 'DELETE'
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