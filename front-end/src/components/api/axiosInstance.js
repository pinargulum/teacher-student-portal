import axios from "axios";
//const baseURL = "https://teacher-student-api.up.railway.app";
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
