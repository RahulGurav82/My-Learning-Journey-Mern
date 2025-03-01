import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              MyLogo
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center sm:hidden"> {/* sm:hidden = 760px > && hidden*/}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Homies
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;