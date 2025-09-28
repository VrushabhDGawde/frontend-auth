import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Authentication from "../pages/Authentication";
import FormPage from "../pages/FormPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authentication" element={
          <PublicRoute>
            <Authentication /></PublicRoute>} />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <FormPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
