import React from "react";

function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center relative text-center mx-12">
      <div className="icon">
        <img
          src={require(`../assets/images/${icon}`)}
          alt=""
          className="w-18 h-20 bg-[#081730] rounded-2xl p-4"
        />
      </div>
      <div className="mt-5">{title}</div>
      <span className="mt-4 text-[#707070]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non quo
        animi magnam eius aperiam corrupti et labore
      </span>
      <span className="text-[#E600FF] underline mt-12 cursor-pointer">
        Learn more
      </span>
    </div>
  );
}

export default Feature;
