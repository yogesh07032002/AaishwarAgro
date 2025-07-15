import React from "react";

export const Products = () => {
  const products = [
    {
      name: "Drip Irrigation System",
      desc: "Efficient water delivery for crops with minimal waste.",
      img: "/s2.jpg",
    },
    {
      name: "Solar Pump",
      desc: "Reliable, eco-friendly irrigation solution for remote farms.",
      img: "/s3.jpg",
    },
    {
      name: "Polycab House",
      desc: "Durable storage solutions for agriculture equipment.",
      img: "/s1.jpg",
    },
    {
      name: "Solar Dryer",
      desc: "Preserve produce quality with renewable energy drying.",
      img: "/s4.jpg",
    },

  ];

  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <img
          src="/products-banner.jpg"
          alt="Aaishwar Agro Products"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-green-800 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Our Products
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
          Quality Products for Sustainable Farming
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
