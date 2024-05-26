import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white  h-[100px]   flex items-center justify-between p-7">
      <img src={logo} className="md:w-24 sm:w-14 w-12 md:p-4" alt="Logo" />
      <ul className="md:flex hidden gap-6 ">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li className=" pr-0 md:pr-7">
          <a href="">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
            <RiCloseLargeLine className="text-3xl" />
        ) : (
            <HiOutlineMenuAlt3 className="text-3xl" />
        )}
      </div>
      <div className={!nav?"fixed left-0 top-0 bg-[#000300] p-9 md:hidden sm:flex sm:flex-col border-r h-full border-r-gray-700 ease-in-out duration-500":"fixed left-[-100%]"}>
        <img src={logo} className="w-14 " alt="" />
        <ul className=" mt-12 uppercase p-4 ">
          <li className="py-3 border-b border-gray-500">
            <a href="">Home</a>
          </li>
          <li className="py-3 border-b border-gray-500">
            <a href="">About</a>
          </li>
          <li className="py-3 border-b border-gray-500">
            <a href="">Services</a>
          </li>
          <li className="py-3 border-b border-gray-500">
            <a href="">Products</a>
          </li>
          <li className=" pr-0 md:pr-7 py-3">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
