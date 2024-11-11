import React from "react";
import Group from "../assets/Group.png";
import Img1 from "../assets/Img1.jpg";
import Strup from "../assets/StartupImage.png";
import GovImg from "../assets/GovermentImage.png";

const Boxes = () => {
  return (
    <>
      {/* Sections */}
      <section className="text-center py-24 w-full flex flex-col justify-center bg-gradient-to-b from-blue-900 to-blue-500 min-h-[100vh]">
        <div className="container px-4 w-[90%] lg:w-[80%] mx-auto flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            What Sets Us Apart
          </h2>
          <div>
            <img src={Group} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Boxes;
