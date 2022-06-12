import React from "react";
import { Link} from "react-scroll";
import CallIcon from "@mui/icons-material/Call";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {LINKS} from '../constants/footer'
import { ReactComponent as FbSvg } from "../assets/images/common/fb_filled.svg";
import { ReactComponent as TwitterSvg } from "../assets/images/common/twitter_filled.svg";
import { ReactComponent as InstaSvg } from "../assets/images/common/insta.svg";
import { ReactComponent as LinkedInSvg } from "../assets/images/common/linkedin.svg";
import logo from "../assets/images/build_logo1.png";

function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex items-center md:justify-start justify-center cursor-pointer"
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <img src={logo} alt="logo" className=" w-11 h-11" />
              <span
                className="ml-2 font-bold text-2xl bg-[#91A2B2] bg-gradient-to-r from-[#91A2B2] via-[#FF6D7A] to-[#FFE774] bg-clip-text"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                TheBlackkeyArchitects
              </span>
            </Link>
            <p className="mt-2 text-md text-gray-500">Live your dream!</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                LINKS
              </h2>
              <nav className="list-none mb-10">
                {LINKS.map(({ key, name, to, offset }) => (
                  <li key={key}>
                    <Link
                      className="text-gray-500 hover:text-gray-100 
                  cursor-pointer"
                      to={to}
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={1000}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                SOCIAL MEDIA
              </h2>
              <nav className="list-none mb-10 ">
                <div className="flex flex-row items-center justify-start">
                  <li className="m-5 mt-2 ml-0 cursor-pointer">
                    <a
                      className="text-gray-500 hover:text-gray-100"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FbSvg className="w-5 h-5" />
                    </a>
                  </li>
                  <li className="m-5 mt-2 ml-0 cursor-pointer">
                    <a
                      className=" text-gray-500 hover:text-gray-100"
                      href="https://twitter.com/i/flow/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterSvg />
                    </a>
                  </li>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <li className="m-5 mt-2 ml-0 cursor-pointer">
                    <a
                      className=" text-gray-500 hover:text-gray-100"
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstaSvg />
                    </a>
                  </li>
                  <li className="m-5 mt-2 ml-0 cursor-pointer">
                    <a
                      className=" text-gray-500 hover:text-gray-100"
                      href="https://in.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInSvg />
                    </a>
                  </li>
                </div>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                ADDRESS
              </h2>
              <div className="mb-10">
                <p className="font-bold">21B/100, Address line 1</p>
                <p className="font-bold">Address line 2 details</p>
                <p className="font-bold">Area</p>
                <p className="font-bold">State - Pincode</p>
                <p className="font-bold">Country</p>
                <p className="font-bold">
                  <CallIcon /> +91 1234567890
                </p>
                <p className="font-bold">
                  <EmailRoundedIcon /> info@theblackkeyarchitects.in
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full pl-8">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                LOCATION
              </h2>
              <div className="list-none mb-10">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6614.742978567103!2d78.09249438958743!3d9.51115786047397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8b47dbc6b3ce7e6!2sSri%20Ganesh%20Constructions!5e0!3m2!1sen!2sin!4v1654844196634!5m2!1sen!2sin"
                  width="190"
                  height="190"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 TheBlackkeyArchitects
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                className=" text-gray-500 hover:text-[#4267B2]"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FbSvg className="w-5 h-5" />
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-[#1DA1F2]"
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterSvg />
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-[#F77737]"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstaSvg />
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-[#0077b5]"
                href="https://in.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInSvg />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
