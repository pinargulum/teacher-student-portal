import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import UserRole from "./UserRole.jsx";
import TeacherOptions from "./TeacherOptions.jsx";
import CreateClass from "./CreateClass.jsx";
import AddStudent from "./AddStudent.jsx";
import StudentData from "./StudentData.jsx";
import Student from "./Student.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import "./App.css";




function App() {
  

  return (
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route
        path="/signup"
        element={<Register />}
      />
      <Route
        path="/signin"
        element={<Login />}
      />
      <Route
        path="/user-role"
        element={<UserRole />}
      />

      <Route
        path="/teacher-options"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherOptions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-class"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <CreateClass />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-student"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <AddStudent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enter-data"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <StudentData />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <Student />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
