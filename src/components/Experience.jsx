import React from "react";
import squigle from "../assets/images/Path 318.png";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-20 bg-[#020917] h-[60rem] pt-72 mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img src={squigle} alt="" className="w-20" />
      <div className="headline mt-7 flex flex-col items-center text-3xl">
        <span>An amazing app can change your daily life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="features flex items-center justify-around mt-24 w-full">
        <Feature icon="Group 2.png" title="For Live Music" />
        <Feature icon="music icon.png" title="For Daily Music" />
        <Feature icon="Group 4.png" title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
