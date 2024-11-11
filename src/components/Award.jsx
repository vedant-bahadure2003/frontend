import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";

const Award = () => {
  return (
    <section className="flex flex-col items-center bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Our Efforts To <span className="text-teal-400">Innovate</span> Have Been{" "}
        <span className="text-blue-500">Recognized</span> And{" "}
        <span className="text-teal-400">Appreciated</span>
      </h2>

      {/* Awards Section */}
      <div className="flex flex-col items-center justify-center gap-10 mt-10 w-[90%] lg:w-[80%] mx-auto">
        {/* First Award Card */}
        <div className="relative bg-gradient-to-r from-teal-200 to-blue-400 rounded-lg shadow-lg p-6 flex flex-col items-center w-full max-w-md">
          {/* Left Arrow */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-blue-500 cursor-pointer">
            <FaArrowLeft />
          </div>

          {/* Image with Custom Background */}
          <div className="bg-white rounded-lg p-2 border-4 border-blue-500">
            <img
              src={Image1}
              alt="Award 1"
              className="w-64 h-auto rounded-lg"
            />
          </div>

          <div className="text-white text-center px-4 mt-4">
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-blue-500 cursor-pointer">
            <FaArrowRight />
          </div>
        </div>

        {/* Second Award Card */}
        <div className="relative bg-gradient-to-r from-blue-400 to-teal-200 rounded-lg shadow-lg p-6 flex flex-col items-center w-full max-w-md">
          <div className="text-white text-center mb-4 px-4">
            <p className="text-lg font-medium mb-4">
              Honored by{" "}
              <span className="font-semibold">Shri Dharmendra Pradhan ji</span>{" "}
              <br />
              Union Minister for Education <br />
              Govt. of India - 2023
            </p>
          </div>

          {/* Image with Custom Background */}
          <div className="bg-white rounded-lg p-2 border-4 border-blue-500">
            <img
              src={Image2}
              alt="Award 2"
              className="w-64 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
