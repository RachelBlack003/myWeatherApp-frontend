import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!$&*#]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character (!, $, &, *, #). Quotes, backquotes, and apostrophes are not allowed."
      );
      return;
    }

    try {
      const response = await axios.post("/api/register", { email, password, firstName, lastName });

      if (response.status === 201) {
        setError("");
        navigate("/"); // After successful registration, navigate to login page
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to register. Please try again.";
      setError(message);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        First Name: <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br />
        Last Name: <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required /><br />
        Email: <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        Password: <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;