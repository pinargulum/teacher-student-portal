import axios from "axios";

  const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
  ? "https://teacher-student-portal-production-01ea.up.railway.app"
  : "http://localhost:3001",

  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
