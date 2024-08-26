import React from "react";

export default function Skils() {
  // Helper function to calculate the years of experience
  const calculateExperience = (startYear, endYear) => endYear - startYear;

  const experiences = [
    {
      title: "Javascript",
      startYear: 2000,
      endYear: 2017,
    },
    {
      title: "HTML",
      startYear: 2015,
      endYear: 2022,
    },
    {
      title: "CSS",
      startYear: 2015,
      endYear: 2023,
    },
    {
      title: "Python",
      startYear: 2012,
      endYear: 2024,
    },
    {
      title: "Node Js",
      startYear: 2016,
      endYear: 2024,
    },
  ];

  return (
    <div className="w-full m-auto pt-3 max-w-none bg-slate-50">
      <div
        className="rounded overflow-hidden shadow-none px-6 py-4"
        style={{
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <div
          className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5"
          style={{
            maxWidth: "1200px",
            height: "auto",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          <div className="rounded overflow-hidden shadow-none px-6 py-2">
            <div className="font-bold text-3xl text-left">
              <h3>
                Frontend and Backend Developer
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
              ipsum dolor sit amet, consectetur adipisci elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
              <br />
              <br />
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Download CV
            </a>
          </div>
          <div className="rounded overflow-hidden shadow-none px-6 py-2">
            {/* Insert  Line graph for JavaScript, HTML, CSS, Python, NodeJs based on years of experience*/}
            {experiences.map((experience, index) => {
              const duration = calculateExperience(
                experience.startYear,
                experience.endYear
              );
              const barWidth = `${(duration / 20) * 100}%`; // Adjust divisor to fit a reasonable bar length

              return (
                <div
                  key={index}
                  className="rounded overflow-hidden shadow-none flex flex-col justify-between"
                  style={{ position: "relative" }}
                >
                  <div className="px-6 py-5"></div>
                  <div
                    className="relative bg-gray-200 h-5 mt-auto"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="absolute bg-orange-500 h-full"
                      style={{ width: barWidth, left: 0 }}
                    />
                    <span
                      className="absolute text-white text-xs font-semibold"
                      style={{
                        left: "0",
                        transform: "translateY(-50%)",
                        top: "50%",
                        whiteSpace: "nowrap",
                        paddingLeft: "10px",
                      }}
                    >
                      {experience.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
