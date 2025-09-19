export default function AboutSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Streamline Your Review Paper Process
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our platform helps researchers automate and manage the technical review paper writing process. 
          From problem statement to research gaps, generate and organize content seamlessly.
        </p>
        <a
          href="#form-section"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium 
                     hover:bg-indigo-700 shadow"
        >
          Submit Feedback
        </a>
      </div>
    </section>
  );
}