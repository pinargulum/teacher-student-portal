import { Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AddStudent = () => {
    const navigate = useNavigate();
     useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "teacher") {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="page-container">
      <h2>Add Student</h2>
      <button
        className="page-container-back-button"
        type="button"
        onClick={() => navigate("/teacher-options")}
      >
        Main Page
      </button>
       <form>
        <input
          type="text"
          name="name"
          placeholder="Add Student"
          required
        />
         <input
          type="text"
          name="name"
          placeholder="Add Student"
          required
        />
         <input
          type="text"
          name="name"
          placeholder="Add Student"
          required
        />
         <input
          type="text"
          name="name"
          placeholder="Add Student"
          required
        />
        </form>
    </div>
  );
};
export default AddStudent;
