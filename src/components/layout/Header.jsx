import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Brand Name */}
        <NavLink
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-15 w-auto"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 border-b-2 border-blue-800 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://wa.me/919529782595"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-800 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 text-lg font-medium"
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/919529782595"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
