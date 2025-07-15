import React from "react";

export const CounterSection = () => {
  const counters = [
    {
      number: "12+",
      label: "Years of Experience",
    },
    {
      number: "50+",
      label: "Projects Delivered",
    },
    {
      number: "100+",
      label: "Farmers Benefited",
    },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          Our Impact & Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {counters.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-green-800 mb-3">
                {item.number}
              </div>
              <div className="text-base md:text-lg text-gray-600 text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
