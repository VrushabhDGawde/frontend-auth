import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("accessToken");

  if (!isTokenValid(token)) {
    return <Navigate to="/authentication" replace />;
  }

  return children;
}
