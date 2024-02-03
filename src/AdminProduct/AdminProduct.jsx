// AdminProduct.jsx
import React from "react";
import "./AdminProduct.css"; // Import your CSS file

function AdminProduct(props) {
  return (
    <div className="admin-product-container">
      <h1 className="product-title">Each Product</h1>
      <div className="product-info">
        <p className="product-detail">Name: {props.attri.productname}</p>
        <p className="product-detail">Benefits: {props.attri.benefits}</p>
        <p className="product-detail">Unit: {props.attri.unit}</p>
        <p className="product-detail">Price: {props.attri.price}</p>
      </div>

      {/* Display images if available */}
      {props.attri.images && props.attri.images.length > 0 && (
        <div className="image-container">
          <h2 className="image-title">Images</h2>
          {props.attri.images.map((image, index) => (
            <img
              key={index}
              className="product-image"
              src={`data:${image.contentType};base64,${image.data}`}
              alt={`Product Image ${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminProduct;
