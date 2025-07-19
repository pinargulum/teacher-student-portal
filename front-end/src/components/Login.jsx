import React, { useState } from "react";
import "../components/Login.css";
import { Route, useNavigate } from "react-router-dom";
import instance from "./api/axiosInstance.js";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const token = localStorage.getItem("token")
    try {
      const res = await instance.post("/signin", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({ role: res.data.role}))
      console.log("Success:", res.data);
      alert("User loggedin successfully!");
      navigate("/user-role");
    } catch (err) {
     
      alert("Login failed.");
    }
  };

  return (
    <div className="login-container">
      <button
        className="page-container-back-button"
        type="button"
        onClick={() => navigate("/")}
      >
        Main Page
      </button>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
