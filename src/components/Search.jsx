import React from "react";
import bgGraphic from "../assets/images/backgraphics.png";
import squigle from "../assets/images/Path 318.png";
import MusicPlayer from "./MusicPlayer";

function Search() {
  return (
    <div className="search relative h-[65rem] px-20 bg-[#081730] pt-72 pb-40 mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem] ">
      {/* left side */}
      <div className="left flex-1">
        <img src={bgGraphic} alt="" className="absolute top-80 left-[-42rem]" />
        <img
          src={require("../assets/images/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        <img
          src={require("../assets/images/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />{" "}
        <img
          src={require("../assets/images/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <img
          src={require("../assets/images/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      <div className="right flex items-start flex-col justify-start flex-1 h-full pt-36">
        <div className="searchbar flex justify-start w-full">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-12"
          />
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-12">
            <img
              src={require("../assets/images/search.png")}
              alt=""
              className="w-6"
            />
          </div>
        </div>
        <div className="tild flex items-center justify-start w-full mt-7">
          <img src={squigle} alt="" className="w-20" />
        </div>
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Musix by</span>
          <span>
            <b>Name or Direct url</b>
          </span>
          <span className="text-sm mt-3 text-[#707070]">
            Lorem ipsum dolor sit amet conse
            <br />
            ctetur adipisicing elit. Est velit dolore corrupti,
            <br /> quas suscipit a quod nulla possimus,
          </span>
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
