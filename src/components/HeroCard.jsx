import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function HeroCard({
  idx,
  activeIdx,
  direction = "flex-row",
  title,
  description,
  btnLabel,
  imgUrl,
}) {
  const { ref } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={`wrapper bg-[#081730] flex ${direction} items-center justify-between px-5 rounded-b-[5rem] w-full h-[85.5vh] relative z-[3]`}
    >
      <div className=" flex flex-1 w-1/2 p-5 m-2 flex-col text-left">
        <motion.h2 className="underLine2 text-3xl text-white font-bold leading-[1.2]">
          {title}
        </motion.h2>
        <motion.p className="text-[1rem] text-gray-500 my-4">
          {description}
        </motion.p>
        <Button
          variant="text"
          sx={{ color: "orange", fontWeight: "bold" }}
          size={"large"}
          endIcon={<DescriptionIcon />}
        >
          {btnLabel}
        </Button>
      </div>
      <div className="flex flex-1 w-1/2 p-5 m-2 " data-aos="zoom-in-up">
        <motion.div>
          <img
            className="object-cover object-center rounded h-full"
            alt="hero"
            src={imgUrl}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroCard;
