import React, { useState } from "react";
import "../components/Register.css";
import axios from "axios";
import { Route, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    password: "",
    accessCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/signup", formData);
      console.log("Success:", res.data);
      alert("User registered successfully!");
      navigate("/signin");
    } catch (err) {
      console.error("Register error:", err.response?.data?.message || err.message);
      alert("Registration failed.");
    }
  };
  return (
    <div className="register-container">
      <h1>Register</h1>
      <button
        className="page-container-back-button"
        type="button"
        onClick={() => navigate("/")}
      >
        Main Page
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="accessCode"
          placeholder="Access Code"
          value={formData.accessCode}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
