import React from "react";
import Img1 from "../assets/Img1.jpg";
import Imageee from "../assets/imageee.png";
import Image112 from "../assets/image112.png";

const HorizontalCard = () => {
  return (
    <>
      <div className="w-full h-[200px] mt-[40px]">
        <div className="font-semibold w-[90%] lg:w-[50%] mx-auto h-full flex flex-col items-center justify-center gap-4">
          <h1
            id="heading"
            className="text-2xl md:text-4xl text-[#4c5856] text-center"
          >
            Check Out Our
            <span className="text-[#008d8f]"> Holistic Programs </span>Designed
          </h1>
          <h1
            id="heading"
            className="text-2xl md:text-4xl text-[#4c5856] text-center"
          >
            To Help You Reach Your
            <span className="text-[#008d8f]"> Goals</span>
          </h1>
        </div>
      </div>

      {/* Section */}
      <section className="text-center py-10 lg:py-24 w-full flex flex-col justify-center">
        <div className="container px-4 w-[90%] lg:w-[80%] mx-auto flex flex-col items-center gap-8">
          {/* Card 1 */}
          <div className="w-full lg:w-[80%] h-auto lg:h-[300px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row items-center gap-4 p-4 rounded-xl">
            <img
              className="w-full lg:w-[40%] h-[200px] lg:h-[270px] rounded-xl object-cover"
              src={Imageee}
              alt="Holistic Program 1"
            />
            <div className="flex flex-col w-full lg:w-[60%] items-start">
              <h3 className="text-xl font-semibold text-[#2b95ed]">
                Created By IIT MIT
              </h3>
              <p className="mt-2 text-start">Lorem, ipsum | dolor | sit amet</p>
              <p className="mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium id tempore maxime repellat mollitia totam
                perspiciatis, iure ea, harum sed deleniti cum reiciendis,
                commodi earum.
              </p>
              <button className="self-center lg:self-end mt-4 text-white bg-blue-400 rounded-lg px-6 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-[80%] h-auto lg:h-[300px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row items-center gap-4 p-4 rounded-xl">
            <img
              className="w-full lg:w-[40%] h-[200px] lg:h-[270px] rounded-xl object-cover"
              src={Image112}
              alt="Holistic Program 2"
            />
            <div className="flex flex-col w-full lg:w-[60%] items-start">
              <h3 className="text-xl font-semibold text-[#2b95ed]">
                Created By IIT MIT
              </h3>
              <p className="mt-2 text-start">Lorem, ipsum | dolor | sit amet</p>
              <p className="mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium id tempore maxime repellat mollitia totam
                perspiciatis, iure ea, harum sed deleniti cum reiciendis,
                commodi earum.
              </p>
              <button className="self-center lg:self-end mt-4 text-white bg-blue-400 rounded-lg px-6 py-2">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalCard;
