// AdminProduct.jsx
import React from "react";

function AdminProduct(props) {
  return (
    <>
      <h1>Each Product</h1>
      <p>{props.attri.productname}</p>
      <p>{props.attri.benefits}</p>
      <p>{props.attri.unit}</p>
      <p>{props.attri.price}</p>

      {/* Display images if available */}
      {props.attri.images && props.attri.images.length > 0 && (
        <div>
          <h2>Images</h2>
          {props.attri.images.map((image, index) => (
            <img
              key={index}
              src={`data:${image.contentType};base64,${image.data}`}
              alt={`Product Image ${index}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AdminProduct;
