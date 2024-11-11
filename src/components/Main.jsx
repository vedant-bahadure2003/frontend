import React from "react";
import ComputerPhoto from "../assets/ComputerPhoto.png";
import BankImage from "../assets/BankImage.png";
import BuildingImage from "../assets/BuildingImage.png";
import LocationImage from "../assets/LocationImage.png";
import NotepadImage from "../assets/NotepadImage.png";
import CapImage from "../assets/CapImage.png";
import SchoolImage from "../assets/SchoolImage.png";

function Main() {
  return (
    <div className="mb-10">
      <div className="w-[90%] lg:w-[80%] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-10 mb-10">
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={ComputerPhoto}
            alt="PC Image"
            className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
          />
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Where The World <br />
            Learns To Code
          </h1>

          <div className="flex justify-center lg:justify-start gap-6 mt-10">
            <div className="flex flex-col items-center gap-2 p-6 border-2 border-blue-400 shadow-lg rounded-lg w-44 md:w-56 text-center">
              <img
                src={BankImage}
                alt="Campus Training Icon"
                className="w-12 h-12"
              />
              <p className="font-semibold text-blue-700">Campus Training</p>
              <p className="text-xs text-gray-600">
                Designed for college students with a focus on xyz, xyz, xyz.
              </p>
              <button className="bg-blue-500 text-white rounded-md p-2 mt-2 w-[70%]">
                Explore
              </button>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 border-2 border-blue-400 shadow-lg rounded-lg w-44 md:w-56 text-center">
              <img
                src={BuildingImage}
                alt="Professional Training Icon"
                className="w-12 h-12"
              />
              <p className="font-semibold text-blue-700">
                Professional Training
              </p>
              <p className="text-xs text-gray-600">
                Designed for professionals with a focus on xyz, xyz, xyz.
              </p>
              <button className="bg-blue-500 text-white rounded-md p-2 mt-2 w-[70%]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-6 px-6 lg:px-10 w-[90%] lg:w-[80%] mx-auto mt-6 lg:gap-8">
        <div className="border-2 border-blue-400 rounded-lg w-40 lg:w-[220px] h-[120px] flex items-center justify-center shadow-lg">
          <div className="flex items-center gap-3">
            <img src={LocationImage} alt="Cities Icon" className="w-10 h-10" />
            <div className="text-center">
              <h1 className="text-blue-400 text-2xl font-bold">50+</h1>
              <p className="text-gray-600 text-sm">Cities</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-400 rounded-lg w-40 lg:w-[220px] h-[120px] flex items-center justify-center shadow-lg">
          <div className="flex items-center gap-3">
            <img src={NotepadImage} alt="Modules Icon" className="w-10 h-10" />
            <div className="text-center">
              <h1 className="text-blue-400 text-2xl font-bold">80+</h1>
              <p className="text-gray-600 text-sm">Modules</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-400 rounded-lg w-40 lg:w-[220px] h-[120px] flex items-center justify-center shadow-lg">
          <div className="flex items-center gap-3">
            <img src={CapImage} alt="Students Icon" className="w-10 h-10" />
            <div className="text-center">
              <h1 className="text-blue-400 text-2xl font-bold">10K+</h1>
              <p className="text-gray-600 text-sm">Students</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-400 rounded-lg w-40 lg:w-[220px] h-[120px] flex items-center justify-center shadow-lg">
          <div className="flex items-center gap-3">
            <img
              src={SchoolImage}
              alt="Institutes Icon"
              className="w-10 h-10"
            />
            <div className="text-center">
              <h1 className="text-blue-400 text-2xl font-bold">100+</h1>
              <p className="text-gray-600 text-sm">Institutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
