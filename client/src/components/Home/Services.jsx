import React from "react";
import Web from "../Images/Web.png";
import WebScraping from "../Images/WebScraping.png";
import EthicalHacking from "../Images/EthicalHacking.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

function Services() {
  return (
    <div
      className="rounded overflow-hidden shadow-lg px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        What services I am I providing?
        <h3 class="text-2xl font-normal text-gray-800 mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <hr class="border-t-2 border-red-700  mb-2" style={{ width: "45%", margin: "15px auto" }} />
        </h3>
      </h2>
      

      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px"
        }}
      >
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <img className="w-[25%] mx-auto block" src={Web} alt="Forest" />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              Web Development
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <img className="w-[25%] mx-auto block" src={WebScraping} alt="Forest" />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              Web Scrapping
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <img className="w-[25%] mx-auto block" src={EthicalHacking} alt="Forest" />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              Ethical Hacking
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
