import React from "react";
import headingLogo from "../assets/heading-logo.jpg";

function Header() {
  return (
    <header className="bg-white py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6">
        <div className="flex-shrink-0 flex items-center">
          <img
            src={headingLogo}
            alt="Logo"
            className="h-[95px] w-[300px] mr-2"
          />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Virtual Labs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                For Colleges
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="px-4 py-2 bg-transparent text-blue-500 rounded-lg border border-blue-500">
            Log in
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Register
          </button>
        </div>

        <div className="block md:hidden">
          <button className="text-gray-700 focus:outline-none focus:text-blue-500">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
