// Navbar.js
import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-[-10px] left-0 right-0 w-[50%] m-auto rounded-2xl bg-gray-800"
          : "bg-gray-800"
      } text-[#addbb7] p-6`}
    >
      <div className="container mx-auto flex justify-center space-x-4 items-center">
        <div className=" font-bold text-xl hover:cursor-pointer">
          <img src={Logo} alt="Logo" className="h-8 mr-4" />
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#dd5522] focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6">
          <li className="hover:cursor-pointer hover:scale-110  text-lg">
            Home
          </li>
          <li className="hover:cursor-pointer hover:scale-110 text-lg">
            About
          </li>
          <li className="hover:cursor-pointer hover:scale-110 text-lg">
            Contact
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
