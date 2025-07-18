import "./CreateClass.css";
import { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateClass = () => {
  const token = localStorage.getItem("token");

  axios
    .get("http://localhost:3001/trainer-options", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  const navigate = useNavigate();
  const [classData, setClassData] = useState({
    className: "",
    date: "",
    time: "",
    location: "",
    trainer: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setClassData({ ...classData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(classData)
  }
 
  return (
    <div className="page-container">
      <h1>Create a New Class</h1>
      <button
        className="page-container-back-button"
        type="button"
        onClick={() => navigate("/teacher-options")}
      >
         Main Page
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="className"
          value={classData.className}
          onChange={handleChange}
          placeholder="Enter class name"
          required
        />
        <input
          type="date"
          name="date"
          value={classData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={classData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          value={classData.location}
          onChange={handleChange}
          placeholder="Enter class location"
          required
        />
        <input
          type="text"
          name="trainer"
          value={classData.trainer}
          onChange={handleChange}
          placeholder="Enter trainer name"
          required
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};
export default CreateClass;
