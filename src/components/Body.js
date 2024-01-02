import React from "react";
import LinkedIn from "../images/LinkedIn.svg";
import { useEffect, useState } from "react";

const Body = () => {
  const textArray = ["Programmer", "Web Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  return (
    <div className="flex flex-col lg:flex-row bg-[#101d25] min-h-screen text-[#addbb7] py-0 lg:py-20 lgpx-8">
      <div className="w-1/2 py-10 flex justify-center lg:py-0 m-auto mt-20"></div>
      <div className="w-1/2 lg:ml-4 m-auto lg:mt-20 lg:mr-20 text-center">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Hi, I am Akshay Narsanne
        </h1>
        <p>
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results.
        </p>
        <button className="ml-0 mt-6 w-28 p-4 lg:m-12 bg-[#dd5522] rounded-lg">
          Check Resume
        </button>
      </div>
    </div>
  );
};

export default Body;
