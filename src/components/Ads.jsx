import React from "react";
import GovImg from "../assets/GovermentImage.png";
import Strup from "../assets/StartupImage.png";
const Ads = () => {
  return (
    <>
      <div className=" w-full h-[200px] bg-[#f3faff] flex items-center justify-center gap-10 flex-wrap">
        <div className="w-[400px] h-[160px]  flex justify-center">
          <img className="" src={GovImg} alt="" />
        </div>
        <div className="w-[400px] h-[160px]  flex justify-center">
          <img className="" src={Strup} alt="" />
        </div>
        <div className="w-[400px] h-[160px]  flex justify-center">
          <img className="" src={GovImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ads;
