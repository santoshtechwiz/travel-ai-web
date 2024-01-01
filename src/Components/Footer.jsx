import React from "react";
import { Link } from "react-router-dom";

// Footer component
const Footer = () => {
  return (
   <div className="mt-10">
     <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2023 Travel Planner</p>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="text-sm hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="text-sm hover:text-gray-300 transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
