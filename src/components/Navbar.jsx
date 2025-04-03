import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/hkLogo.png";
import { useState } from "react";
import { navLinks } from "../constants";
import menu from "../assets/menu.png"
import close from "../assets/close.png"

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="bg-gradient-to-b from-black to-[rgb(20,20,33)]  fixed top-0 left-0 px-10  w-full navbar z-50 mb-5 flex items-center justify-between py-1 ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 opacity-80" src={logo} alt="logo.png" />
      </div>
      
      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`bg-gradient-to-r from-pink-200 via-slate-300 to-purple-400 bg-clip-text text-transparent cursor-pointer
                hover:shadow-purple-400 hover:shadow-[rgba(128,0,128,0.3)_0px_2px_0px_0px]
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* //Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[42px] w-[42px] object-contain bg-purple-950 rounded-full"
            onClick={() => settoggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[rgb(20,20,33)] text-white absolute top-20 right-0 mx-4 my-2 
              min-w-[150px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer  hover:text-secondary
              text-[16px] text-white 
              ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
