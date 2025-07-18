import { Route, useNavigate } from "react-router-dom";
import axios from "axios";

const Student = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  axios
    .get("http://localhost:3001/participant", {
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
  return (
    <div className="page-container">
      <button
        className="page-container-back-button"
        type="button"
        onClick={() => navigate("/user-role")}
      >
        Main Page
      </button>
      <h1>Welcome</h1>
      <p>
        This page is read only. It will only display student data. User has no
        access to delete/add any data
      </p>
      <p>
        This page is read only. It will only display Student data. User has no
        access to delete/add any data
      </p>
      <p>
        This page is read only. It will only display student data. User has no
        access to delete/add any data
      </p>
    </div>
  );
};
export default Student;
