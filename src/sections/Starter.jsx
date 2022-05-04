import React from "react";
import { GoMail } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import building from "../assets/images/building.jpg";
import Button from "../components/Button";

function Starter() {
  return (
    <div className="main-container mx-0 my-10">
      <div className="container grid grid-cols-2">
        <div className="content mt-14 mr-12">
          <h1 className="text-5xl">
            We provide solution and plan to build the future!
          </h1>
          <p className="text-2xl text-gray-500 mt-5">
            A professional Architect company with over 10+ projects and 100+
            design concepts. We provide a quality architect solution from
            domestic to enterprise level.
          </p>
          <div className="button-container flex my-4">
            <Button
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
              color={"secondary-color"}
            />
            <Button
              content="Contact us"
              icon={<GoMail />}
              color="secondary-color"
            />
          </div>
        </div>
        <div className="image">
          <img
            className="h-[30rem] w-[30rem]"
            src={building}
            alt="Architecting Future"
          />
        </div>
      </div>
    </div>
  );
}

export default Starter;
