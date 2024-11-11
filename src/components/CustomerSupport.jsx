import React from "react";
import customerSupportImage from "../assets/baiChaPhoto.png";

const CustomerSupport = () => {
  return (
    <div className="p-5 m-5 shadow-xl flex flex-col lg:flex-row gap-10 rounded-xl mt-[50px] lg:mt-[100px]">
      <div className="w-full lg:w-[700px] h-[300px] lg:h-[450px] mx-auto">
        <img
          src={customerSupportImage}
          alt="CustomerSupportImage"
          className="rounded-xl w-full lg:w-[80%] h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-auto">
        <div className="text-3xl lg:text-5xl text-blue-500 mb-4 lg:mb-6 text-center lg:text-left">
          <p>Find Out More</p>
          <p>Reasons To Stay</p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded p-3"
          />
          <input
            type="text"
            placeholder="Mobile no."
            className="border border-gray-300 rounded p-3"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded p-3"
          />
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-500 text-sm">
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and default Notification Settings
            </label>
          </div>
          <button
            type="submit"
            className="w-full lg:w-[200px] bg-blue-500 text-white py-3 rounded-xl text-lg mt-4 m-auto lg:m-0"
          >
            Enquire Now
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Already Have An Account?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
