import { FaLightbulb, FaRegFileAlt, FaBolt, FaUsers, FaFileExport } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      title: "Easy to Use",
      description: "Our platform is user-friendly and intuitive, making it simple to create technical papers with ease.",
      icon: <FaLightbulb className="h-10 w-10" />,
    },
    {
      title: "Versatile Templates",
      description: "Choose from a variety of templates to find the perfect one for your project.",
      icon: <FaRegFileAlt className="h-10 w-10" />,
    },
    {
      title: "Fast & Efficient",
      description: "Generate Technical Review Papers in a fraction of the time it would take manually.",
      icon: <FaBolt className="h-10 w-10" />,
    },
    {
      title: "Collaboration Made Easy",
      description: "Share your project with collaborators and work on it together in real-time.",
      icon: <FaUsers className="h-10 w-10" />,
    },
    {
      title: "Easy Exporting",
      description: "Export your Technical Review Paper to PDF, Word, or other formats easily.",
      icon: <FaFileExport className="h-10 w-10" />,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us?</h3>
          <p className="mt-4 text-lg text-gray-500">Our platform offers many benefits to make your work easier and faster.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-6 text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl w-72"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-20 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">{feature.title}</h4>
              <p className="text-center text-white text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
