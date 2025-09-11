import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start generating Technical Review Papers
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
            Experience a faster, smarter, and simpler way to create professional Technical Review Papers.
            Take your research workflow to the next level today.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/authentication"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
