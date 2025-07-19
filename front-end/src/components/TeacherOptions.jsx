import "../components/TeacherOptions.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import instance from "../components/api/axiosInstance";

const TeacherOptions = () => {
  const navigate = useNavigate();
 


   const token = localStorage.getItem("token");
   instance
     .get("/teacher-options", {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((res) => console.log(res.data))
     .catch((err) => console.error(err));
    
 
  

  return (
    <div className="teacher-container">
      <h1>Welcome</h1>
      <button
        className="page-logout"
        type="button"
        onClick={() => navigate("/")}
      >
        Sign Out
      </button>
      <div className="options">
        <button onClick={() => navigate("/create-class")}>
          Create New Class
        </button>
        <button onClick={() => navigate("/add-student")}>Add Student</button>
        <button onClick={() => navigate("/enter-data")}>
          Enter Student Data
        </button>
      </div>
    </div>
  );
};

export default TeacherOptions;
