import { useState } from "react";
import authService from "../../services/authService";


export default function AuthForm() {
  const [mode, setMode] = useState("signup"); // signup | login
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      if (mode === "signup") {
        await authService.register({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        });
        setSuccess("Registration successful! Please login.");
        setMode("login"); // redirect to login mode
      } else {
        const response = await authService.login({
          email: formData.email,
          password: formData.password,
        });
        // Save access token in localStorage (industry practice)
        localStorage.setItem("accessToken", response.data.accessToken);
        setSuccess("Login successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 m-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {mode === "signup" ? "Create your account" : "Sign in to your account"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === "signup" ? (
            <>
              Or{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                sign in to your account
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                create one
              </button>
            </>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Username only for signup */}
            {mode === "signup" && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Confirm Password only for signup */}
            {mode === "signup" && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            )}

            {/* Terms only for signup */}
            {mode === "signup" && (
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <a href="/terms" className="text-indigo-600 hover:text-indigo-500">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            )}

            {/* Error / Success messages */}
            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
              >
                {loading
                  ? "Processing..."
                  : mode === "signup"
                    ? "Sign Up"
                    : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
