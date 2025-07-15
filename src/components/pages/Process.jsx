import React from "react";

export const Process = () => {
  const steps = [
    {
      title: "Requirement Gathering",
      desc: "We understand farmer needs through surveys and consultations.",
    },
    {
      title: "Planning & Analysis",
      desc: "Detailed feasibility reports and geo-hydrological surveys.",
    },
    {
      title: "Design & Proposal",
      desc: "Customized irrigation and solar system designs.",
    },
    {
      title: "Implementation",
      desc: "Expert installation of systems and products.",
    },
    {
      title: "Training & Support",
      desc: "Farmer education and ongoing maintenance services.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="relative">
        <img
          src="/process-banner.jpg"
          alt="Our Process"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Our Process
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          How We Work
        </h2>
        <div className="space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
