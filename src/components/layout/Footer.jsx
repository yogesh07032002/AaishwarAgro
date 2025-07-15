import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/" className="hover:text-green-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-700">About</Link></li>
            <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
            <li><Link to="/products" className="hover:text-green-700">Products</Link></li>
            <li><Link to="/process" className="hover:text-green-700">Process</Link></li>
            <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
          </ul>
        </div>

        {/* Other Portals */}
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-4">OTHER PORTALS</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/solar-solutions" className="hover:text-green-700">Solar Solutions</Link></li>
            <li><Link to="/agriculture-equipment" className="hover:text-green-700">Agriculture Equipment</Link></li>
            <li><Link to="/water-conservation" className="hover:text-green-700">Water Conservation Services</Link></li>
            <li><Link to="/geo-hydrological-surveys" className="hover:text-green-700">Geo-Hydrological Surveys</Link></li>
          </ul>
        </div>

        {/* Associates */}
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-4">ASSOCIATES</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="https://shaktipumps.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">Shakti Pumps</a></li>
            <li><a href="https://avanajalsanchay.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">Avana Jal Sanchay</a></li>
            <li>Authorized Dealer</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-green-800 mb-4">CONTACT US</h3>
          <p className="text-gray-700 text-sm">
             Aaishwar Agro Flowra and Renewable Energy Services<br/>
            83, Nandanvan Society, Nakane Road, Deopur, Dhule, 424 002, India
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            Phone: <a href="tel:+919529782595" className="hover:text-green-700">+91 9529782595</a> / <a href="tel:+917249581015" className="hover:text-green-700">+91 7249581015</a>
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            Email: <a className="text-green-800 hover:underline" href="mailto:aaiishwaragroflowrapvtltd@gmail.com">
             info@aaishwaragro.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-green-800">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800 text-white text-center text-sm py-3">
        © {new Date().getFullYear()}  Aaishwar Agro Flowra and Renewable Energy Services | Registered with Government of India | All rights reserved.
      </div>
    </footer>
  );
};
