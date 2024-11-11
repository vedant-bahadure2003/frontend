import React from "react";
import Joinn from "../assets/Joinn.png";

const Join = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={Joinn} alt="" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"></div>
    </div>
  );
};

export default Join;
