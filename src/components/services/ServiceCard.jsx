import React from "react";

function ServiceCard({ id, title, icon, description }) {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 px-4 cursor-pointer"
      data-aos={
        id % 3 === 1
          ? "fade-up-right"
          : id % 3 === 2
          ? "flip-up"
          : "fade-up-left"
      }
    >
      <div
        className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
      >
        <div
          className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
        >
          {icon}
        </div>
        <h4 className="font-semibold text-xl text-black mb-3">{title}</h4>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
