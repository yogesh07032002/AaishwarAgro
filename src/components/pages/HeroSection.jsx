import { Link } from "react-router-dom";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative w-full mt-0">
      {/* Background Image */}
      <div className="relative w-full h-[200px] md:h-[400px] lg:h-[700px]">
        <img
          src="/img1.jpg"
          alt="Aaishwar Agro Banner"
          className="w-full h-full object-fill object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            Sustainable Agriculture & Renewable Energy Solutions
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-medium text-gray-100 max-w-2xl mb-4 md:mb-6">
            Empowering farmers and communities with innovative <br className="hidden md:block" />
            solar and irrigation solutions.
          </p>

          <div className="flex flex-col items-center space-y-3">
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-green-800 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded shadow"
            >
              Contact Us
            </Link>

            <a
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
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
