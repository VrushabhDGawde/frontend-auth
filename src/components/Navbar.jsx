import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";
import authService from "../services/authService";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");
      setLoggedIn(isTokenValid(token));
    };

    checkAuth();

    // Listen for login/logout events from other tabs/windows
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await authService.logout();
      alert(response.data.message);
      localStorage.removeItem("accessToken");
      setLoggedIn(false);
      navigate("/authentication");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Full-width blurred background with rounded corners */}
      <div className="w-full bg-white/30 backdrop-blur-md shadow-lg rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                </svg>
              </Link>
              <span className="ml-2 font-bold text-xl">Technical Review</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex md:items-center space-x-6">
              <Link
                to="/form"
                className="text-gray-900 hover:text-indigo-600 font-medium"
              >
                Generate Paper
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-indigo-600 font-medium"
              >
                About
              </Link>
              <a
                href="#contactus"
                className="text-gray-900 hover:text-indigo-600 font-medium"
              >
                Contact
              </a>
            </div>

            {/* Right buttons */}
            <div className="hidden md:flex items-center space-x-4">

              {!loggedIn ? (
                <Link
                  to="/authentication"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Register
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/30 backdrop-blur-md shadow-lg mt-2 p-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/form"
                className="block px-3 py-2 rounded text-gray-900 hover:bg-gray-100"
              >
                Generate Paper
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded text-gray-900 hover:bg-gray-100"
              >
                About
              </Link>
              <a
                href="#contactus"
                className="block px-3 py-2 rounded text-gray-900 hover:bg-gray-100"
              >
                Contact
              </a>

              {!loggedIn ? (
                <Link
                  to="/authentication"
                  className="block px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-center"
                >
                  Register
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
