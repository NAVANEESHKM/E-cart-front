// AddProduct.jsx
import React, { useEffect, useState } from "react";
import AdminProduct from "../AdminProduct/AdminProduct";

export default function AddProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://e-cart-backend-1gs2.onrender.com/api/all/productget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setProducts(jsonData);
        console.log("JSONDATA", jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {products.length ? (
        products.map((product, index) => (
          <AdminProduct key={index} attri={product} />
        ))
      ) : (
        <div className="nothing">
          <p>No products available.</p>
        </div>
      )}
    </>
  );
}
