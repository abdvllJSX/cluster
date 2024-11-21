// src/components/RouteGuard.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("ctx");
  // const isAuthenticated = true
  return isAuthenticated ? children : <Navigate to="/onboarding/login" />;
};

export default RouteGuard;
