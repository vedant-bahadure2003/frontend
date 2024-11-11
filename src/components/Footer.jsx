import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a73e8] via-[#175593] to-[#103e80] h-screen pt-16 pb-16 px-10 text-white text-base lg:text-lg font-light flex flex-col lg:flex-row justify-around items-center">
      <div className=" flex flex-col gap-5 mb-10 lg:mb-0 max-w-md">
        <p className="text-4xl lg:text-5xl font-bold">Let's Keep in Touch!</p>
        <p className="text-lg">Request a CodingPro institute enquiry!</p>
        <div className="relative w-full max-w-md">
          <input
            className="w-full px-6 py-4 pr-16 rounded-full text-black outline-none bg-transparent border border-white focus:border-blue-300"
            type="text"
            placeholder="Institute name"
          />
          <button className="w-16 absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full py-2 text-black bg-white hover:bg-gray-200">
            ➜
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="hover:underline cursor-pointer">Create Account</p>
          <p className="hover:underline cursor-pointer">Sign in</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="font-semibold text-lg">+91 93809246</p>
          <p className="font-semibold text-lg">codingjr.in@gmail.com</p>
          <p className="font-semibold text-lg">AIC-BHU, Varanasi, 421004</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-10 lg:mb-0 max-w-sm">
        <p className="font-semibold text-xl lg:text-2xl">Courses</p>
        <p className="text-lg">Campus Training Program</p>
        <p className="text-lg">Professional Training Program</p>
        <p className="text-lg">B.Tech</p>
        <p className="text-lg">B.Des</p>
      </div>

      <div className="flex flex-col gap-4 mb-10 lg:mb-0 max-w-sm">
        <p className="font-semibold text-xl lg:text-2xl">Company</p>
        <p className="text-lg hover:underline cursor-pointer">About Us</p>
        <p className="text-lg hover:underline cursor-pointer">Blog</p>
        <p className="text-lg hover:underline cursor-pointer">Our Team</p>
        <p className="text-lg hover:underline cursor-pointer">Privacy</p>
        <p className="text-lg hover:underline cursor-pointer">
          Terms & Conditions
        </p>
        <p className="text-lg hover:underline cursor-pointer">FAQ</p>
      </div>

      <div className="flex flex-col gap-5 text-3xl lg:text-4xl">
        <p className="text-lg lg:text-xl font-semibold text-center">
          Follow Us
        </p>
        <div className="flex gap-6 justify-center lg:justify-start">
          <FaInstagram className="cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
