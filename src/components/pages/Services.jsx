import React from "react";

export const Services = () => {
  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <img
          src="/services-banner.jpg" // Put this image in /public
          alt="Aaishwar Agro Services"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Our Services
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Sustainable Solutions for Agriculture & Renewable Energy
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          We empower farmers and communities with expert services in sustainable irrigation, 
          water conservation, and renewable energy technologies tailored to local needs.
        </p>
      </div>

      {/* Service Categories */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Agriculture Solutions */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Agriculture Solutions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Drip and Sprinkler Irrigation Systems</li>
              <li>Poly Houses and Line Pond Material</li>
              <li>Mulching & Advanced Agriculture Equipment</li>
              <li>Geo-Hydrological Surveys and Consultancy</li>
            </ul>
          </div>

          {/* Renewable Energy Solutions */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Renewable Energy Solutions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Solar On-Grid and Off-Grid Systems</li>
              <li>Solar Pumps and Street Lighting</li>
              <li>Solar Dryers, Cold Storage, Insect Traps</li>
              <li>Water Conservation Techniques</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Ready to transform your farm with sustainable solutions?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact us today to learn how our expert team can help you achieve greater yields, reduce costs, and build a greener future.
        </p>
        
            <div className="text-center" ><a
              href="https://wa.me/919529782595"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded shadow flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.098 3.201 5.08 4.487.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347zM12.05 21.997h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.275c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.895 6.991c-.003 5.45-4.437 9.884-9.888 9.884zM20.463 3.7A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.3-1.654a11.86 11.86 0 005.735 1.459h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 00-3.474-8.413z" />
              </svg>
              <span className="items-center text-center">Chat on WhatsApp</span>
            </a></div>
      </div>
    </section>
  );
};
