import React from "react";
import logo from "../assets/images/build_logo1.png";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import { Stack } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/components/Navbar.css";

function Navbar() {
  return (
    <header className="header bg-[#081730] flex items-center justify-between px-20 py-5 text-sm">
      <Stack spacing={2} direction={"row"} alignItems="center">
        <img src={logo} alt="logo" className=" w-11 h-11" />
        <span
          className="font-bold text-2xl bg-[#91A2B2] bg-gradient-to-r from-[#91A2B2] via-[#FF6D7A] to-[#FFE774] bg-clip-text
        "
          style={{ WebkitTextFillColor: "transparent" }}
        >
          TheBlackkeyArchitects
        </span>
      </Stack>
      {/* <CenterMenu /> */}
      <div className="flex flex-wrap justify-between">
        <div className="underLine2 mr-5 capitalize">
          <Link
            to="hero-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <Button variant="text" sx={{ color: "white" }}>
              HOME
            </Button>
          </Link>
        </div>
        <div className="underLine2 mr-5 capitalize">
          <Link
            to="service-section"
            spy={true}
            smooth={true}
            offset={100}
            duration={1000}
          >
            <Button variant="text" sx={{ color: "white" }}>
              SERVICES
            </Button>
          </Link>
        </div>
        <div className="underLine2 mr-5 capitalize">
          <Link
            to="project-section"
            spy={true}
            smooth={true}
            offset={10}
            duration={1000}
          >
            <Button variant="text" sx={{ color: "white" }}>
              PROJECTs
            </Button>
          </Link>
        </div>
        <div className="underLine2 mr-5">
          <Link
            to="contact-section"
            spy={true}
            smooth={true}
            offset={10}
            duration={1000}
          >
            <Button variant="outlined" color="primary" startIcon={<CallIcon />}>
              CONTACT
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
