import React, { useEffect, useState } from "react";
import "./DetailsLayout.css";
import defaultImage from "./order_pro.jpg"; // Import your default image

function DetailsLayout(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const val = props.attri.product;

  const destroyer = async (props) => {
    const id = props.attri.phone;
    const email = localStorage.getItem("Email");
    try {
      const response = await fetch(
        `https://e-cart-backend-1gs2.onrender.com/api/deleteorder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: id, email: email }),
        }
      );

      if (response.ok) {
        console.log("Item deleted successfully");
        // Additional actions after deletion
      } else {
        console.error("Error:", response.statusText);
        // Error handling
      }
    } catch (error) {
      console.error("Error:", error);
      // Error handling
    }
  };

  useEffect(() => {
    fetch("https://e-cart-backend-1gs2.onrender.com/api/all/productgetorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productname: val }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("JSONDATA", jsonData);

        // Assuming that there is an image property in the returned JSON data
        if (
          jsonData.images &&
          jsonData.images.length > 0 &&
          jsonData.images[0].data
        ) {
          const image = jsonData.images[0];
          setImageUrl(
            `data:${image.contentType};base64,${image.data}`
          );
        } else {
          // If image is not available or data structure is different, set default image
          setImageUrl(defaultImage);
        }
      })
      .catch((error) => {
        console.error(error);
        // If there is an error, set default image
        setImageUrl(defaultImage);
      });
  }, [val]);
  

  return (
    <>
      <div className="Detailmain">
        {/* Apply imageUrl dynamically to the img tag */}
        <img
          id="prod_img"
          src={imageUrl } // Use imageUrl if available, otherwise use defaultImage
          alt={`Product Image`}
        />
        <div className="Detailinner">
          <p className="head_det">Name</p>
          <p className="info_det">{props.attri.name}</p>
          <p className="head_det">Product</p>
          <p className="info_det">{props.attri.product}</p>
          <p className="head_det">Quantity</p>
          <p className="info_det">{props.attri.quantity}</p>
          <p className="head_det">Phone</p>
          <p className="info_det">{props.attri.phone}</p>

          <button
            onClick={() => destroyer(props)}
            className="butt_Det"
          >
            CANCEL ORDER
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsLayout;
