import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";


const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;