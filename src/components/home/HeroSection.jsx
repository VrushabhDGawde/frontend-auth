import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Generate Technical Review Papers with Ease
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Our platform makes it simple to create high-quality Technical Review Papers in a fraction of the time.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/form"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
          >
            Generate Paper
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
