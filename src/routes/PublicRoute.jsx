// src/routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  if (isTokenValid(token)) {
    // Already logged in, redirect to form or home
    return <Navigate to="/form" replace />;
  }
  return children;
}