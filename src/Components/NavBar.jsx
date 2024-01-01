import React, { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Decore from "../assets/Decore.png";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PLAN", link: "/plan" },
    { name: "SEARCH", link: "/search" },
    { name: "SEVEN WONDERS", link: "/wonder" },
    { name: "ABOUT", link: "/about" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md mb-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-black font-bold text-xl">
          <span className="text-yellow-700">Trip</span>
          <span className="text-yellow-950 border-b-4 border-yellow-800 dark:border-yellow-500">Crafts</span>
        </Link>
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="w-7 h-7" /> : <Bars3BottomRightIcon className="w-7 h-7" />}
        </div>
        <div className={`md:flex items-center space-x-4 ${open ? 'flex' : 'hidden'} md:flex`}>
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="py-2 px-4 text-gray-800 hover:text-blue-400 duration-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
