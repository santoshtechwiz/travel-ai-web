import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-4 py-2 flex justify-between items-center bg-gray-800 border-b-2 border-gray-600">
      <Link
        to="/"
        className="flex items-center text-2xl font-bold text-violet-600 text-white transition duration-300 transform hover:scale-105"
      >
        {/* Replace the SVG below with your preferred icon */}
        <svg
          className="w-8 h-8 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l9-9 9 9-9 9-9-9zm0 0v0z"
          ></path>
        </svg>
        <span className="logo-text">Travel Planner</span>
      </Link>

      <div className="lg:hidden">
        <button
          onClick={handleMobileMenuToggle}
          className="text-white focus:outline-none transition duration-300 transform hover:scale-105"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 animate__animated animate__fadeIn">
          <Link
            to="/About"
            className="block py-2 px-4 text-white hover:text-pink-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/plan"
            className="block py-2 px-4 text-white hover:text-pink-500 transition duration-300"
          >
            Plan
          </Link>
        </div>
      )}

      <div className="hidden lg:flex space-x-4 items-center">
        <Link
          to="/About"
          className="text-gray-300 hover:text-pink-500 transition duration-300 transform hover:scale-105"
        >
          About
        </Link>

        <Link
          to="/plan"
          className="text-gray-300 hover:text-pink-500 transition duration-300 transform hover:scale-105"
        >
          Plan Your Trip
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
