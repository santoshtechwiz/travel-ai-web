import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2023 Travel Planner</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-sm hover:text-gray-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-300 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
