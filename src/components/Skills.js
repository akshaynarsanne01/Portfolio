import React from "react";
import { myskill } from "../utils/constants";
const Skills = () => {
  return (
    <div className="bg-[#101d25] w-full min:h-[500px] pt-10 max:h-auto p-4 rounded-lg shadow-lg flex flex-wrap justify-center">
      {myskill.map((item) => (
        <div className="p-5 bg-[#89ac91] h-[250px] m-2 h-auto mx-2 text-center border-2 border-black rounded-2xl">
          <h1 className="text-2xl">{item.title}</h1>
          <div className="flex flex-wrap justify-around space-x-2 space-y-2 items-center">
            {item.skills.map((skill) => (
              <div className="p-2 w-20 flex flex-wrap">
                <img src={skill.image} className="w-10 h-10" />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
