import React from "react";
import logo from "../assets/images/build_logo1.png";
import Button from "@mui/material/Button";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-20 py-5 text-sm">
      <img src={logo} alt="logo" className=" w-11 h-11" />
      {/* <CenterMenu /> */}
      <div className="flex flex-wrap justify-between">
        <div className="underLine2 mr-5">
          <Button variant="text" sx={{ color: "white" }}>
            HOME
          </Button>
        </div>
        <div className="underLine2 mr-5">
          <Button variant="text" sx={{ color: "white" }}>
            ABOUT
          </Button>
        </div>
        <div className="underLine2 mr-5">
          <Button variant="text" sx={{ color: "white" }}>
            PROJECTS
          </Button>
        </div>

        <div className="underLine2 mr-5">
          <Button variant="outlined" color="primary">
            CONTACT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
