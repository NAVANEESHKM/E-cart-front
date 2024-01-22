// Admin.js

import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

import "./Admin.css"; // Import the CSS file for styling

export default function Admin() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();



    fetch('https://e-cart-backend-1gs2.onrender.com/api/adminuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Item Found") {

          console.log("Email id found");
          console.log("TOken frontend ",data.token)
          localStorage.setItem("Token", data.token);

          navigate('/front');
        } else {
          console.log("Email id not found");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="admin-label">Password:</label>
        <input
          className="admin-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="admin-button" type="button" onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
}
