export default function AboutCTA() {
  return (
    <section className="bg-indigo-600 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg text-indigo-200 mb-6">
          Be part of our mission to make technical paper writing smarter and faster.
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
