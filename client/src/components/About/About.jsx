import React from "react";
import { Link } from "react-router-dom";
import StayInTouch from "../Home/StayInTouch";
import Reviews from "../Home/Reviews";
import Skills from "./Skills";

import AboutMe from "../Images/AboutMe.png";

export default function About() {
  return (
    <div className="w-full m-auto pt-3 max-w-none">
      <div
        className="rounded overflow-hidden shadow-none px-6 py-4"
        style={{
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <div className="bg-gray-100 py-3">
          <h1 class="text-5xl font-bold text-center text-gray-800 mb-14">
            About Me
            <hr
              class="border-t-2 border-red-700  mb-2 py-3"
              style={{ width: "15%", margin: "15px auto" }}
            />
          </h1>
        </div>

        <div
          className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5"
          style={{
            maxWidth: "1200px",
            height: "auto",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          <div className="rounded overflow-hidden shadow-none px-6 py-2">
            <img
              className="w-full h-auto"
              src={AboutMe}
              alt="Educational excursion"
            />
          </div>
          <div className="rounded overflow-hidden shadow-none px-6 py-2">
            <div className="font-bold text-3xl text-left">
              <h3>
                Designing With Passion While Exploring The World
                <hr
                  class="border-t-2 border-red-700  mb-2 py-1"
                  style={{
                    width: "15%",
                    margin: "15px auto",
                    marginLeft: "0px",
                  }}
                />
              </h3>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              <br />
              <br />
              Talk with me...
            </p>
            <a href="/contact" className="font-bold">
              contact@domain.com
            </a>
          </div>
          <div className="rounded overflow-hidden shadow-none px-6 py-2">
            <div className="font-bold text-3xl text-left">
              <h3>
                I Create Products Not Just Arts
                <hr
                  class="border-t-2 border-red-700  mb-2 py-1"
                  style={{
                    width: "15%",
                    margin: "15px auto",
                    marginLeft: "0px",
                  }}
                />
              </h3>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      <Reviews />
      <Skills />
      <StayInTouch />
    </div>
  );
}
