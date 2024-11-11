import React from "react";

function Poster() {
  return (
    <div className="w-full flex flex-col items-center space-y-8 p-6 lg:p-12 bg-gray-100">
      <div className="relative flex flex-col lg:flex-row items-center gap-6 w-full max-w-5xl">
        <div className="relative">
          <img
            alt="Award Ceremony"
            className="w-[300px] h-[200px] lg:w-[400px] lg:h-[280px] object-cover border-4 border-blue-500 rounded-lg shadow-lg"
          />

          <div className="absolute -top-3 -left-3 w-full h-full border-4 border-blue-300 rounded-lg"></div>
        </div>

        <div className="flex flex-col justify-center bg-blue-200 p-4 rounded-lg shadow-md text-center lg:text-left max-w-sm lg:max-w-none">
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
        </div>

        <div className="absolute top-6 right-8 w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center gap-6 w-full max-w-5xl">
        <div className="flex flex-col justify-center bg-blue-200 p-4 rounded-lg shadow-md text-center lg:text-left max-w-sm lg:max-w-none">
          <p className="text-lg font-semibold text-blue-800">
            Honored by Shri Dharmendra Pradhan ji <br />
            Union Minister for Education <br />
            Govt. of India - 2023
          </p>
        </div>

        <div className="relative">
          <img
            alt="Award Ceremony"
            className="w-[300px] h-[200px] lg:w-[400px] lg:h-[280px] object-cover border-4 border-blue-500 rounded-lg shadow-lg"
          />

          <div className="absolute -top-3 -left-3 w-full h-full border-4 border-blue-300 rounded-lg"></div>
        </div>

        <div className="absolute top-6 right-8 w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default Poster;
