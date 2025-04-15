import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import logo from "../assets/agiliad-logo-2x-1.png";
import { GoDotFill } from "react-icons/go";
const Footer = () => {
  const location = [
    {
      path: "/",
      text: "Boulder, USA ",
    },
    {
      path: "/",
      text: "Peoria, USA ",
    },
    {
      path: "/",
      text: "Boston, USA",
    },
    {
      path: "/",
      text: "Mumbai, India ",
    },
    {
      path: "/",
      text: "Pune, India  ",
    },
    {
      path: "/",
      text: "Noida, India",
    },
    {
      path: "/",
      text: "Singapore",
    },
    {
      path: "/",
      text: "Tokyo, Japan",
    },
  ];
  return (
    <footer className="bg-[#1582cc] py-[20px] sm:px-[80px] flex flex-col gap-10">
      <div className="flex sm:flex-row flex-col gap-3 items-center justify-between">
        <div className="location bg-white rounded-lg p-2">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <Link>
            <FaXTwitter size={24} className="text-white" />
          </Link>
          <Link>
            <CiLinkedin size={30} className="text-white" />
          </Link>
          <Link>
            <FaInstagram size={28} className="text-white" />
          </Link>
          <Link>
            <CiFacebook size={30} className="text-white" />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="flex-wrap flex items-center justify-center gap-4 ">
        {location.map((location, index) => {
          return (
            <div className="flex items-center justify-center gap-1">
              <Link
                to={location.path}
                className="flex items-center gap-1 text-gray-300 hover:text-white"
              >
                <GoDotFill size={24} />
                <h6>{location.text}</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
