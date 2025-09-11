export default function ValuesSection() {
  const values = [
    { title: "Innovation", desc: "We embrace modern technologies to bring fresh, effective solutions to complex problems." },
    { title: "Simplicity", desc: "Our platform is designed to be intuitive, efficient, and easy for everyone to use." },
    { title: "Collaboration", desc: "We believe in working together and supporting researchers, students, and developers worldwide." }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {values.map((val, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
