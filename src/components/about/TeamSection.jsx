export default function TeamSection() {
  const team = [
    { name: "Vrushabh Gawde", role: "Founder & Developer", img: "https://via.placeholder.com/200" },
    { name: "Siddhi", role: "Creative Designer", img: "https://via.placeholder.com/200" },
    { name: "John Doe", role: "AI Researcher", img: "https://via.placeholder.com/200" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          The passionate minds behind our platform, working together to build something impactful.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-100 shadow mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 font-medium mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
