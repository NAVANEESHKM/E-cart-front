import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./index.css"; // Import your CSS file

function Login_page(props) {
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  function helpLogin() {
    localStorage.setItem("Email", Email);
    localStorage.setItem("Password", Password);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = { Email, Password };
    console.log("Frontend", formData);

    fetch('http://localhost:3000/api/usernew', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: Email, password: Password })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        console.log("Data sent");
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleLogin(e) {
    e.preventDefault();

    const formData = { Email, Password };
    console.log("Frontend", formData);

    fetch('http://localhost:3000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: Email, password: Password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Item Found") {
          helpLogin();
          console.log("Email id found");
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
    <div className="login-container">
      <div className="login-form">
        <label>Enter Email ID
          <input
            type="text"
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>Enter Password
          <input
            type="text"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" onClick={(e) => handleSubmit(e)}>Signup</button>
        <button className="login-button" onClick={(e) => handleLogin(e)}>Login</button>
      </div>
    </div>
  );
}

export default Login_page;
