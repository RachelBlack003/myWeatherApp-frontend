import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";

//login and weather currently have a similar code setup. They use states
//to swap between pages. The html needs to be updated to interact with the backend
//,though

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post("/api/auth", { email, password });

          if (response.status === 201) {
              const { token } = response.data;
              localStorage.setItem("authToken", token); //store JWT token in local storage
              setError("");
              navigate("/weather");
          }
      } catch (err) {
          const message =
              err.response?.data?.message || "Invalid credentials. Please try again.";
          setError(message);
      }
  };

  return (
    <div>
      <h1>Please log in</h1>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        Email: <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        Password: <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}


export default Login