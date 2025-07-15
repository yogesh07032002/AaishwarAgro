import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patil",
      role: "Farmer - Dhule",
      quote:
        "Aaishwar Agro's solar pumps have transformed my irrigation. Lower costs and reliable water supply all year.",
    },
    {
      name: "Jayesh Mundhe",
      role: "Farmer - Nashik",
      quote:
        "Their team provided excellent support and the solar dryer improved my produce quality significantly.",
    },
    {
      name: "Govt Project Officer",
      role: "Agriculture Department",
      quote:
        "Professional surveys and reports. They've been a reliable partner for our rural development schemes.",
    },
    {
      name: "Mahesh Pawar",
      role: "Farmer - Jalgaon",
      quote:
        "Very satisfied with the drip irrigation system and their after-sales service. Highly recommend!",
    },
    {
      name: "Kiran Deshmukh",
      role: "Farmer - Ahmednagar",
      quote:
        "The solar fencing and water conservation solutions have been game changers for my farm.",
    },
    {
      name: "Vijaya Kale",
      role: "Farmer - Sangli",
      quote:
        "Highly professional team. Their solar dryer helped me reduce wastage and improve profits.",
    },
  ];

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Testimonials
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Hear from our farmers and partners about how Aaishwar Agro is making a difference in agriculture and renewable energy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 text-left flex flex-col"
            >
              <p className="text-gray-800 italic mb-4">“{item.quote}”</p>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-green-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
