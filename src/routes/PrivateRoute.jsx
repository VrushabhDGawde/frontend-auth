import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

function isTokenValid(token) {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export default function PrivateRoute() {
  const token = localStorage.getItem("accessToken");
  return isTokenValid(token) ? <Outlet /> : <Navigate to="/authentication" replace />;
}