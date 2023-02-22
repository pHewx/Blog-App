import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import DashBoard from "./features/dashboard/DashBoard";
import LoginSuccess from "./features/auth/pages/LoginSuccess";
import CheckLogin from "./components/CheckLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route
          path="/register"
          element={
            <CheckLogin>
              <Register />
            </CheckLogin>
          }
        />
        <Route
          path="/login"
          element={
            <CheckLogin>
              <Login />
            </CheckLogin>
          }
        />
        <Route path="/login-success/:id" element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
