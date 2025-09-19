import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Authentication from "../pages/Authentication";
import FormPage from "../pages/FormPage";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </Router>
  );
}
