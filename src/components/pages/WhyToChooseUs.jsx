import { FaHandshake, FaLeaf, FaSeedling, FaSolarPanel } from "react-icons/fa";

import React from "react";

export const WhyToChooseUsSection = () => {
  const features = [
    {
      icon: <FaSeedling className="text-green-600 w-8 h-8" />,
      title: "12+ Years Experience",
      description: "Decades of expertise in rural development and sustainable practices.",
    },
    {
      icon: <FaSolarPanel className="text-yellow-500 w-8 h-8" />,
      title: "Domastic, industrial, agriculture innovative green technology",
      description: "Solar pumps, solar dryers, and innovative green technologies.",
    },
    {
      icon: <FaHandshake className="text-blue-700 w-8 h-8" />,
      title: "Trusted Partnerships",
      description: "Authorized dealer of Shakti Pumps and Avana Jal Sanchay.",
    },
    {
      icon: <FaLeaf className="text-green-800 w-8 h-8" />,
      title: "Empowering Farmers",
      description: "Serving 100+ farmers with reliable irrigation and solar solutions.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
