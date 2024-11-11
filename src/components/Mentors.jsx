import React from "react";
import PopularCard from "../assets/PopularCard.png";
import PopularCardd from "../assets/PopularCardd.png";
import PopularCarddd from "../assets/PopularCarddd.png";

const Mentors = () => {
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="w-full h-[200px]">
          <div className="w-[90%] lg:w-[70%] mx-auto h-full flex flex-col items-center justify-center gap-4 px-4">
            <p
              id="heading"
              className="text-2xl md:text-3xl text-[#4c5856] text-center"
            >
              We Know Just Education Is Not Enough Anymore
            </p>
            <h1
              id="heading"
              className="text-3xl md:text-5xl text-[#4c5856] text-center"
            >
              So We've Got The
              <span className="text-[#008d8f]"> Best Mentors </span> For You
            </h1>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-start gap-8 w-[90%] lg:w-[80%] mx-auto">
            <div className="w-[350px] flex-shrink-0 h-auto flex flex-col items-center mb-8">
              <div className="relative w-full h-[550px] shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={PopularCarddd}
                  alt=""
                />
                <div className="text-white absolute bottom-0 w-full h-[43%] flex flex-col gap-4 opacity-80 bg-[#1b1b1bcf] p-4">
                  <h1 className="text-lg">Software Engineer</h1>
                  <p className="text-sm">IIT-BHU</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    laboriosam amet aliquid dolorem eius! Delectus, enim odit
                    necessitatibus odio eveniet dolores, iste dolorum incidunt
                    quia id commodi eos repellendus a. ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[350px] flex-shrink-0 h-auto flex flex-col items-center mb-8">
              <div className="relative w-full h-[550px] shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={PopularCard}
                  alt=""
                />
              </div>
            </div>

            <div className="w-[350px] flex-shrink-0 h-auto flex flex-col items-center mb-8">
              <div className="relative w-full h-[550px] shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={PopularCardd}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentors;
