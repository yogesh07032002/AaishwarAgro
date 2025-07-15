import { FaBolt, FaFan, FaSeedling, FaSun, FaTools, FaWarehouse, FaWater } from "react-icons/fa";

import React from "react";

const renewableProducts = [
  { title: "Solar On-Grid Systems", icon: <FaSun /> },
  { title: "Solar Off-Grid Systems", icon: <FaSun /> },
  { title: "Hybrid Solar Systems", icon: <FaSun /> },
  { title: "Solar Street Lights", icon: <FaBolt /> },
  { title: "Solar Pumps", icon: <FaWater /> },
  { title: "Solar Insect Traps", icon: <FaFan /> },
  { title: "Solar Dryers", icon: <FaWarehouse /> },
  { title: "Solar Cold Storage", icon: <FaWarehouse /> },
  { title: "Solar Zatka Machines", icon: <FaBolt /> }
];

const agriProducts = [
  { title: "Drip & Sprinkler Irrigation", icon: <FaWater /> },
  { title: "Poly Houses", icon: <FaWarehouse /> },
  { title: "Line Pond Material", icon: <FaWarehouse /> },
  { title: "Mulching", icon: <FaSeedling /> },
  { title: "Agriculture Equipment", icon: <FaTools /> },
  { title: "Solar Pumps & Avana Jal Sanchay", icon: <FaTools /> }
];

const ProductServices = () => {
  return (
    <section className="bg-white py-16 px-6" id="products-services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products & Services</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">Renewable Energy Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {renewableProducts.map((product, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-yellow-600">{product.icon}</div>
                <div className="text-gray-800 font-medium">{product.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Agricultural Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {agriProducts.map((product, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-green-600">{product.icon}</div>
                <div className="text-gray-800 font-medium">{product.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductServices;