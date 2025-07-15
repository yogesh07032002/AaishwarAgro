import React from "react";

export const About = () => {
  return (
    <section className="bg-white">
      
      {/* Hero Banner */}
      <div className="relative">
        <img
          src="/img3.jpg"
          alt="About Aaishwar Agro"
          className="w-full h-[300px] md:h-[550px] object-cover"
        />
        <div className="absolute inset-0 bg-opacity-100 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            About Aaishwar Agro
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Committed to Sustainable Agriculture & Renewable Energy
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Aaishwar Agro Flowra and Renewable Energy Services is dedicated to 
          transforming rural livelihoods through sustainable, innovative solutions. 
          With over 12 years of experience in the rural development sector, 
          we partner with farmers and communities to deliver reliable irrigation, 
          water conservation, and renewable energy technologies.
        </p>
      </div>

      {/* Experience Highlight */}
      <div className="bg-green-50 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-green-700 mb-2">12+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-green-700 mb-2">50+</h3>
            <p className="text-gray-700">Projects Delivered</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-green-700 mb-2">100+</h3>
            <p className="text-gray-700">Farmers Empowered</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Agriculture Solutions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Drip and Sprinkler Irrigation Systems</li>
              <li>Polycab Houses and Line Pond Material</li>
              <li>Mulching and Advanced Agriculture Equipment</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Renewable Energy Solutions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Solar On-Grid and Off-Grid Systems</li>
              <li>Solar Pumps and Street Lights</li>
              <li>Solar Dryers, Cold Storage, and Insect Traps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Authorised Dealer Info */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Authorised Dealer & Trusted Partner
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We are proud authorized dealers for Shakti Pumps and Avana Jal Sanchay, ensuring the highest quality products and support for our farmers.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
            Our Vision & Mission
          </h3>
          <p className="text-gray-700 mb-4 text-lg">
            <strong>Vision:</strong> To be a leading partner in sustainable agriculture and renewable energy, transforming rural communities with eco-friendly, innovative solutions.
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Mission:</strong> Empower farmers through accessible solar technology, efficient irrigation systems, and expert consultancy, creating a greener and more prosperous future.
          </p>
        </div>
      </div>

      {/* Directors / Team */}
      {/* Directors / Team */}
<div className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
    Our Directors
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white shadow-md p-6 text-center border-2 border-black rounded-2xl">
      <img
        src="/img5.jpeg"
        alt="Er. Sandip Ishwar Pawar"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-blue-800">Er. Sandip Ishwar Pawar</h3>
      <p className="text-gray-600 mt-2">Director</p>
      <p className="text-green-700 font-medium mt-1">B.Tech Agriculture Engineering</p>
      <p className="text-gray-600 mt-2 text-sm">
        A leader with deep experience in rural development, committed to delivering sustainable solutions.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 text-center border-2 border-black rounded-2xl">
      <img
        src="/img4.jpeg"
        alt="Mrs. Rupali Chavan"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-blue-800">Mrs. Rupali Chavan</h3>
      <p className="text-gray-600 mt-2">Director</p>
      <p className="text-gray-600 mt-2 text-sm">
        Passionate about empowering farmers through innovative agriculture and renewable energy solutions.
      </p>
    </div>
  </div>
</div>

    
    

    </section>
  );
};
