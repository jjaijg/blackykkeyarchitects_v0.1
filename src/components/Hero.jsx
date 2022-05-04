import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

import bgGraphic from "../assets/images/backgraphics.png";
import p1 from "../assets/images/p 1.png";
import p2 from "../assets/images/p 2.png";
import p3 from "../assets/images/p 3.png";
import p4 from "../assets/images/p 4.png";

function Hero() {
  const [elementVisible, setElementVisible] = useState(false);
  const bg = {
    true: {
      scale: 0.9,
    },
    false: {
      scale: 1,
    },
  };

  const musicPlayer = {
    true: {
      left: "300px",
    },
    false: {
      left: "240px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementVisible(isVisible)}
      minTopValue={500}
    >
      <div className="wrapper- bg-[#081730] flex items-center justify-between px-20 rounded-b-[5rem] w-full h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings w-1/2 flex flex-col items-start justify-center text-5xl leading-snug">
          <span>
            Build your <b>Dream!</b>
          </span>
          <span>
            Make your <b>Own Design!</b>
          </span>
          <span className="text-lg text-gray-500 my-2">
            Architect the future with us with <b> Experience and quality</b>
            Architect the future
            <br />
            Architect the future with us with <b> Experience and quality</b>
            <br />
            Architect the future with us with <b> Experience and quality</b>
          </span>
          <div>
            <button className="mt-5 border-[#232A4E] border-2 rounded-lg p-4 text-xl hover:bg-slate-400 hover:text-[#232A4E]">
              Contact Us today!
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-1/2">
          <motion.img
            variants={bg}
            animate={elementVisible}
            transition={{ duration: 1, type: "ease-out" }}
            src={bgGraphic}
            alt=""
            className="absolute top-[-8rem] left-72"
          />
          <motion.img
            src={p1}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-52"
          />
          <motion.img
            variants={musicPlayer}
            animate={elementVisible}
            transition={{ duration: 1, type: "ease-out" }}
            src={p2}
            alt=""
            className="absolute top-[6.1rem] w-40 left-60"
          />
          <motion.img
            variants={rect}
            animate={`${elementVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={p3}
            alt=""
            className="absolute top-48 w-20 left-52"
          />
          <motion.img
            variants={heart}
            animate={`${elementVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={p4}
            alt=""
            className="absolute top-48 w-20 left-[12.5rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
