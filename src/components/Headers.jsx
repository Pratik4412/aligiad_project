import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/agiliad-logo-2x-1.png";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const licontent = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "https://agiliad.com/product-engineering/",
      text: "Product Engineering",
    },
    {
      path: "/",
      text: "Services",
    },
    {
      path: "/",
      text: "Careers",
    },
    {
      path: "/",
      text: "About Us",
    },
  ];

  return (
    <div className="sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between w-full px-[16px] sm:px-[80px] py-4 stycky top-0">
        <div className="w-1/2 sm:full ">
          {" "}
          <img src={logo} alt="" className="sm:w-1/2" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
        <div className="w-full hidden md:block">
          <ul className="flex items-center gap-4 justify-between">
            {licontent.map((items, index) => {
              return (
                <li key={index}>
                  <Link to={items.path}>{items.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4">
          {licontent.map((item, index) => (
            <li key={index} className="py-2 border-b border-gray-100">
              <Link
                to={item.path}
                className="block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Headers;
