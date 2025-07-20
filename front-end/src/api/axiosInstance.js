import axios from "axios";

const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://teacher-student-portal-production-01ea.up.railway.app"
  : "http://localhost:3001";

  const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
  ? "https://teacher-student-portal-production-01ea.up.railway.app"
  : "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
export const signup = async (userData) => {
  const res = await axios.post(`${baseUrl}/signup`, userData);
  return res.data;
};

export default instance;
