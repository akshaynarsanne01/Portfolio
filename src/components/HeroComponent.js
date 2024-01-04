import React from "react";
import my_photo from "../images/myimg.jpeg";
import { TypeAnimation } from "react-type-animation";

const HeroComponent = () => {
  return (
    <div className=" w-full min:h-[600px] max:h-auto text-[#addbb7] flex justify-center items-center ">
      <div className="bg-gradient-to-r from-[#101d25] via-[#dd5522] via-0% to-[#101d25] to-90% bg-opacity-30  w-full h-full p-8 m-auto grid md:grid-cols-2 outline outline-2 outline-[#dd5522]/50">
        <img
          src={my_photo}
          alt="My Photo"
          className="w-[60%] h-[60%] object-cover rounded-3xl mx-auto my-8"
        />
        <div className="mx-auto my-8 ml-0 ">
          <p className="text-4xl font-bold">Hi, I am</p>
          <h1 className="text-4xl font-bold">Akshay Narsanne</h1>
          <TypeAnimation
            sequence={[" Web Developer", 1000, "Programmer", 1000]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="text-[#addbb7] font-bold"
          />
          <p className="text-lg w-3/4 pt-4">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <button className="bg-gradient-to-t from-[#101d25] via-0% via-[#914428] to-[#101d25] to-90% p-4 m-8 ml-0 rounded-lg text-[#addbb7] text-lg hover:scale-110 ease-in-out duration-300">
            Check Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
