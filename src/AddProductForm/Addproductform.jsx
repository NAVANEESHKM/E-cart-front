import React, { useState } from "react";
import "./Addproductform.css"
export default function AddProductForm() {
  const [productname, setProductName] = useState("");
  const [benefits, setBenefits] = useState("");
  const [unit, setUnit] = useState("kg"); 
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  const email=localStorage.getItem("Email")
  // Convert form data to JSON
  const formData = {
    productname,
    benefits,
    unit,
    price
  };
  

  // Send JSON data to the server
  fetch('https://e-cart-backend-1gs2.onrender.com/api/adminproduct', {
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

  return (
    <div className="add-product-form-container">
      <h1>FORM TO ADD PRODUCT</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Product Name:
          <input
            type="text"
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label>
          Benefits:
          <textarea
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
        </label>

        <label>
          Measurement Unit:
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="kg">kg</option>
            <option value="litre">litre</option>
          </select>
        </label>

        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
