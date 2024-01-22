// Admin.js

import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

import "./Admin.css"; // Import the CSS file for styling

export default function Admin() {
    const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleLogin1(e) {
    e.preventDefault();



    fetch('https://e-cart-backend-1gs2.onrender.com/api/adminuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: Email, password: Password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Item Found") {

          console.log("Email id found");
    

          navigate('/adminpage');
        } else {
          console.log("Email id not found");
          //Error here check
          navigate('/adminpage');

        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className="admin-login-container">
      <h2 className="admin-title">Admin Login</h2>
      <form className="admin-form">
        <label className="admin-label">Email:</label>
        <input
          className="admin-input"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="admin-label">Password:</label>
        <input
          className="admin-input"
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="admin-button" type="button" onClick={(e) => handleLogin1(e)}>Login</button>
      </form>
    </div>
  );
}
