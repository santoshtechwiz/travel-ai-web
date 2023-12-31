import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
      <Link to="/" className="text-2xl font-bold text-violet-600 dark:text-white">
        <div className="logo">
          {/* Your CSS-based logo goes here */}
          <span className="logo-text">Travel Planner</span>
        </div>
      </Link>

      <div className="lg:hidden">{/* Your mobile menu button goes here */}</div>

      <div className="hidden lg:flex">
        <Link
          to="/plan"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition duration-300"
        >
          Plan
        </Link>
      </div>
    </nav>
  ); 
};

export default NavBar;
