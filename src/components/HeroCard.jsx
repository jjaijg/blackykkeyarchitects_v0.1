import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import DescriptionIcon from '@mui/icons-material/Description';
function HeroCard({
  idx,
  activeIdx,
  direction = "flex-row",
  title,
  description,
  btnLabel,
  imgUrl,
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const imgAnimate = {
    true: {
      scale: 2,
    },
    false: {
      scale: 1,
    },
  };

  console.log(
    `is Active : ${idx} ${activeIdx} ${
      idx === activeIdx ? "Active" : "not active"
    }`
  );

  return (
    <motion.div
      ref={ref}
      className={`wrapper bg-[#081730] flex ${direction} items-center justify-between px-5 rounded-b-[5rem] w-full h-[85.5vh] relative z-[3]`}
    >
      {/* Right Side */}
      {/* 
            Title
            description
            Button
        */}
      <div className=" flex flex-1 w-1/2 p-5 m-2 flex-col text-left">
        <motion.h2 className="underLine2 text-3xl text-white font-bold leading-[1.2]">
          Tag Line 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </motion.h2>
        <motion.p className="text-[1rem] text-gray-500 my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          mollitia, quo earum cum eum molestias veritatis eius dolor magni quis
          voluptatibus! Maiores, suscipit unde? Atque excepturi expedita
          exercitationem eum hic.
        </motion.p>
        <Button
          variant="text"
          sx={{ color: "orange", fontWeight: "bold" }}
          size={"large"}
          endIcon={<DescriptionIcon />}
        >
          Get Quote!
        </Button>
      </div>
      {/* Left Side */}
      {/* 
            Image
        */}
      <div className="flex flex-1 w-1/2 p-5 m-2 " data-aos="zoom-in-up">
        <motion.div>
          <img
            className="object-cover object-center rounded h-full"
            alt="hero"
            //   src="https://dummyimage.com/720x600"
            src={require("../assets/images/hero/bg1.jpg")}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroCard;
