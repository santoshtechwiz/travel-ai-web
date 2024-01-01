import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Decore from "../assets/Decore.png";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black">
            <div>
              <span className="font-bold text-yellow-700 mr-1 font-extrabold inline-block mt-2">
                Trip
              </span>
              <span className="font-bold text-yellow-950 border-b-4 border-yellow-800 dark:border-yellow-500">
                Crafts
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center space-x-12 z-50">
          <Link
            to="/plan"
            className="font-semibold hover:border-b-4 border-yellow-800 border-yellow-500 mb-2 md:mb-0"
          >
            Plan Your Trip
          </Link>
          <Link
            to="/wonder"
            className="font-semibold hover:border-b-4 border-yellow-800 border-yellow-500 mb-2 md:mb-0"
          >
            Explore The Wonder
          </Link>
          <Link
            to="/search"
            className="font-semibold hover:border-b-4 border-yellow-800 border-yellow-500 mb-2 md:mb-0"
          >
            Search Hotel
          </Link>
          <Link
            to="/about"
            className="font-semibold hover:border-b-4 border-yellow-800 border-yellow-500 mb-2 md:mb-0"
          >
            About
          </Link>
        </div>

        <Link to="/">
          <img
            src={Decore}
            style={{ position: "absolute", right: 0, top: 0, zIndex: -1 }}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
