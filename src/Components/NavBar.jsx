import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Decore from "../assets/Decore.png";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PLAN", link: "/plan" },
    { name: "SEARCH", link: "/search" },
    { name: "SEVEN WONDERS", link: "/wonder" },
    { name: "ABOUT", link: "/about" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="mb-10">
      <div className="shadow-md w-full left-0 ">
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <img
            src={Decore}
            style={{ position: "absolute", right: 0, top: 0, zIndex: -1 }}
          />
         
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
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center list-none md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          
   
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
