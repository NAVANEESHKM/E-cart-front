import React, { useEffect,useState } from "react";
import "./DetailsLayout.css";
import "./pro.jpg"

const destroyer= async (props) => {
    const id=props.attri.phone;
    const email=localStorage.getItem("Email")
  try {
    const response = await fetch(`https://e-cart-backend-1gs2.onrender.com/api/deleteorder`, {
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
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const destroyer = () => {
      const imageName = props.attri.product; // Replace with the actual image name

      fetch(`https://e-cart-backend-1gs2.onrender.com/api/imageget`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: imageName })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error fetching image: ${response.statusText}`);
          }
          return response.blob();
        })
        .then(imageBlob => {
          // Create a URL for the image blob
          const url = URL.createObjectURL(imageBlob);
          // Set the imageUrl state
          setImageUrl(url);
        })
        .catch(error => {
          console.error('Error:', error);
          // Error handling
        });
    };

    // Call the destroyer function when the component mounts
    destroyer();
  }, []); // No dependencies, so the effect runs only once when the component mounts

  return (
    <>
      <div className="Detailmain">
        {/* Apply imageUrl dynamically to the img tag */}
        <img className="img_deta" src={imageUrl || require('./order_pro.jpg')} alt="main"></img>
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