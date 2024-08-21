import React from "react";

import AboutMe from "../Images/AboutMe.png";

function About() {
  return (
    <div
      className="rounded overflow-hidden shadow-lg px-6 py-4"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        About Me
        <h3 class="text-2xl font-normal text-gray-800 mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <hr class="border-t-2 border-red-700  mb-2" style={{ width: "15%", margin: "15px auto" }} />
        </h3>
      </h2>
      <div
        className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">
              <h3>Developing With a Passion While Exploring The World.</h3>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg px-6 py-4">
          <p className="text-gray-700 text-base">
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="rounded overflow-hidden shadow-lg px-6 py-4">
          <img
            className="w-full h-full"
            src={AboutMe}
            alt="Educational excursion"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
