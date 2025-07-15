import React from "react";

export const Contact = () => {
  return (
    <section className="bg-white">
      <div className="relative">
        <img
          src="/contact-banner.jpg"
          alt="Contact Aaishwar Agro"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Get in Touch
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          We're here to answer your questions and help you get started with our sustainable agriculture and renewable energy solutions.
        </p>

        <form className="bg-gray-50 rounded-lg shadow-md p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" id="name" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" rows="5" className="w-full border rounded px-3 py-2" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded shadow"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-700">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Our Office</h3>
          <p>
            Aaishwar Agro Flowra and Renewable Energy Pvt. Ltd.<br/>
            83, Nandanvan Society, Nakane Road, Deopur, Dhule, 424 002, India
          </p>
          <p className="mt-2">
            📞 +91 9529782595 / +91 7249581015<br/>
            ✉️ <a href="mailto:info@aaishwaragro.com" className="text-blue-700 underline">info@aaishwaragro.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};
