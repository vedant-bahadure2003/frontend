import React from "react";
import Frame from "../assets/Frame.png";

const Card = () => {
  return (
    <>
      {/* Heading */}
      <div className="w-full h-[200px]">
        <div className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto h-full flex flex-col items-center justify-center gap-4">
          <h1
            id="heading"
            className="text-3xl md:text-4xl lg:text-5xl text-[#4c5856]"
          >
            We've Also Been In <span className="text-[#008d8f]">News!</span>
          </h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full">
        <div className="items-center justify-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto gap-4 md:gap-6 lg:gap-8 flex flex-wrap">
          {/* Card 1 */}
          <div className="w-full sm:w-[300px] md:w-[340px] h-[420px] flex flex-col items-center justify-evenly rounded-xl shadow-md shadow-gray-300 my-6 bg-white">
            <div className="w-[80%] mx-auto flex justify-between items-center">
              <h1 className="text-red-600 text-2xl md:text-3xl">Logo</h1>
              <h2 className="text-xs">Name</h2>
            </div>
            <div className="w-[90%] sm:w-[290px] h-[200px] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Frame}
                alt="news-1"
              />
            </div>
            <div className="w-[90%] sm:w-[290px] h-[110px]">
              <div className="flex flex-col h-full">
                <h1 className="text-sm md:text-[19px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="w-full h-[40%] flex justify-between">
                  <h1 className="text-blue-500 cursor-pointer">Read article</h1>
                  <h1>----</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[300px] md:w-[340px] h-[420px] flex flex-col items-center justify-evenly rounded-xl shadow-md shadow-gray-300 my-6 bg-white">
            <div className="w-[80%] mx-auto flex justify-between items-center">
              <h1 className="text-red-600 text-2xl md:text-3xl">Logo</h1>
              <h2 className="text-xs">Name</h2>
            </div>
            <div className="w-[90%] sm:w-[290px] h-[200px] rounded-md overflow-hidden  bg-black"></div>
            <div className="w-[90%] sm:w-[290px] h-[110px]">
              <div className="flex flex-col h-full">
                <h1 className="text-sm md:text-[19px]">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </h1>
                <div className="w-full h-[40%] flex justify-between">
                  <h1 className="text-blue-500 cursor-pointer">Read article</h1>
                  <h1>----</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[300px] md:w-[340px] h-[420px] flex flex-col items-center justify-evenly rounded-xl shadow-md shadow-gray-300 my-6 bg-white">
            <div className="w-[80%] mx-auto flex justify-between items-center">
              <h1 className="text-red-600 text-2xl md:text-3xl">Logo</h1>
              <h2 className="text-xs">Name</h2>
            </div>
            <div className="w-[90%] sm:w-[290px] h-[200px] rounded-md overflow-hidden  bg-black"></div>
            <div className="w-[90%] sm:w-[290px] h-[110px]">
              <div className="flex flex-col h-full">
                <h1 className="text-sm md:text-[19px]">
                  Ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </h1>
                <div className="w-full h-[40%] flex justify-between">
                  <h1 className="text-blue-500 cursor-pointer">Read article</h1>
                  <h1>----</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
