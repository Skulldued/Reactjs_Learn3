import React from "react";
import { socialLinks } from "../constant/index";
const Footer = () => {
  return (
    <div className="w-full my-14  ">
      <div className="max-w-[1280px]  p-8 xs:p-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-16">
          <div className="left ">
            <h1 className="text-white">Footer </h1>
            <p className="text-justify text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              nesciunt laboriosam iste at dolores alias, maxime exercitationem
              enim quo vero?
            </p>
            <div className="flex gap-5 text-xl mt-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                <div className=" text-white"  key={index}>
                      <a
                   className="inline"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent />
                  </a>
                </div>
                );
              })}
            </div>
          </div>
          {/* 2 */}
          <div className="md:flex flex-col items-center py-4">
            <h3 className="text-white font-bold ">Solutions</h3>
            <ul className="  md:mt-6">
                <li><a href="#" className="text-white py-3">Analytics</a></li>
                <li><a href="#" className="text-white py-3">Marketing</a></li>
                <li><a href="#" className="text-white py-3">Commerece</a></li>
                <li><a href="#" className="text-white py-3">Insights</a></li>
                                
            </ul>
          </div>
          {/* 3 */}
          <div className="lg:flex flex-col items-center py-4">
            <h3 className="text-white font-bold ">Support</h3>
            <ul className=" md:mt-6">
                <li><a href="#" className="text-white py-3">Pricing</a></li>
                <li><a href="#" className="text-white py-3">Documentation</a></li>
                <li><a href="#" className="text-white py-3">Orders</a></li>
                <li><a href="#" className="text-white py-3">Api Status</a></li>
                                
            </ul>
          </div>
          {/* 3 */}
          <div className="md:flex flex-col items-center py-4">
            <h3 className="text-white font-bold ">Company</h3>
            <ul className=" md:mt-6">
                <li><a href="#" className="text-white py-3">About</a></li>
                <li><a href="#" className="text-white py-3">Blog</a></li>
                <li><a href="#" className="text-white py-3">Jobs</a></li>
                <li><a href="#" className="text-white py-3">Press</a></li>
                <li><a href="#" className="text-white py-3">Partners</a></li>
                                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
