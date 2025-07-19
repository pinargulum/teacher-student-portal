import "../components/Main.css";
import React from "react";
import { Route, useNavigate } from "react-router-dom";
const Main = () => {
    const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1>Letshine Elementary School</h1>
      <button onClick={() => navigate("/signin")} type="submit">Login</button>
      <button onClick={() => navigate("/signup")}type="submit">Register</button>
    </div>
  );
};
export default Main;
