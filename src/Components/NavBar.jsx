import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
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
        <h1>Travel Crafts</h1>
      </Link>
    </div>
        <div className="flex items-center space-x-12 z-50">
        
          <Link to="/plan" className="font-semibold">
            Plan Your Trip
          </Link>
          <Link to="/wonder" className="font-semibold">
          Explore The  Wonder
          </Link>
          <Link to="/about" className="font-semibold">
            About
          </Link>
        </div>
        <Link to="/" >
          <img src={Decore} style={{ position: 'absolute', right: 0, top: 0, zIndex: -1 }} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
