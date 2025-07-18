import { Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const StudentData = () => {
  const navigate = useNavigate();
  
  return (
    <div className="page-container">
      <h1>Add Student Data</h1>
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
          placeholder="Add Student Data"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Add Student Data"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Add Student Data"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Add Student Data"
          required
        />
      </form>
    </div>
  );
};
export default StudentData;
