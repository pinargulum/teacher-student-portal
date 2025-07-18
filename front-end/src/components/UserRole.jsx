import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/UserRole.css";

const Login = () => {
  const navigate = useNavigate();

  const handleAccess = (accessCode) => {
    if (accessCode === "123") {
      navigate("/teacher-options");
    } else if (accessCode === "456") {
      navigate("/student");
    } else {
      alert("Not Found, please try again");
    }
  };

  return (
    <div className="role-container">
      <h1>Click Your Department</h1>
      <button
        className="page-logout"
        type="button"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="role-button-container">
        <button
          onClick={() => handleAccess("123")}
          type="button"
        >
          Teacher
        </button>
        <button
          onClick={() => handleAccess("456")}
          type="button"
        >
          Student
        </button>
      </div>
    </div>
  );
};
export default Login;
