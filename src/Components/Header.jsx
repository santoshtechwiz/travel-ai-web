import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import SVGComponent from "./Icon";

const Header = () => {
  return (
    <header className="bg-red-400 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-lg font-bold">
          <SVGComponent />
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-pink-500 transition duration-300">
            About
          </Link>
          <Link to="/plan" className="hover:text-pink-500 transition duration-300">
            Plan Your Travel
          </Link>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
