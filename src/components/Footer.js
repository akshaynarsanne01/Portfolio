import React from "react";
import LinkedIn from "../images/LinkedIn.svg";
import Instagram from "../images/Instagram.svg";
import Github from "../images/Github.svg";
const Footer = () => {
  return (
    <div className="w-full bg-[#addbb7] py-4 font-inter">
      <h1 className="text-center text-2xl p-2 text-[#dd5522]">
        Akshay Narsanne
      </h1>
      <ul className="flex justify-center items-center text-center text-lg">
        <li className="p-2 cursor-pointer hover:text-[#dd5522] focus:text-[#dd5522]">
          About
        </li>
        <li className="p-2 cursor-pointer hover:text-[#dd5522]">Skills</li>
        <li className="p-2 cursor-pointer hover:text-[#dd5522]">Projects</li>
        <li className="p-2 cursor-pointer hover:text-[#dd5522]">Contact</li>
      </ul>
      <div className="flex justify-center space-x-6 py-4">
        <img
          className=" fill-red-200 cursor-pointer w-6 h-6 hover:scale-125 ease-in-out delay-400 duration-100"
          src={LinkedIn}
        />
        <img
          className=" fill-red-200 cursor-pointer w-6 h-6 hover:scale-125 ease-in-out delay-400 duration-100"
          src={Github}
        />
        <img
          className=" fill-red-200 cursor-pointer w-6 h-6 hover:scale-125 ease-in-out delay-400 duration-100"
          src={Instagram}
        />
      </div>
      <p className="text-center">
        &#169; 2024 Akshay Narsanne. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
