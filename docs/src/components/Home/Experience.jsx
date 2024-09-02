import React from "react";

function Experience() {
  // Helper function to calculate the years of experience
  const calculateExperience = (startYear, endYear) => endYear - startYear;

  const experiences = [
    {
      title: "Web Development",
      startYear: 2000,
      endYear: 2017,
    },
    {
      title: "Web Designer",
      startYear: 2015,
      endYear: 2022,
    },
    {
      title: "Software Developer",
      startYear: 2015,
      endYear: 2023,
    },
    {
      title: "UI/UX Designer",
      startYear: 2015,
      endYear: 2024,
    },
    {
      title: "Digital Marketer",
      startYear: 2016,
      endYear: 2024,
    },
  ];

  return (
    <div
      className="rounded overflow-hidden shadow-lg px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Work Experience
        <h3 className="text-xl font-normal text-gray-800 mb-8 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <hr
            className="border-t-2 border-red-700 mb-2"
            style={{ width: "25%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        {experiences.map((experience, index) => {
          const duration = calculateExperience(
            experience.startYear,
            experience.endYear
          );
          const barWidth = `${(duration / 20) * 100}%`; // Adjust divisor to fit a reasonable bar length

          return (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col justify-between bg-gray-100"
              style={{ position: "relative" }}
            >
              <div className="px-6 py-5" >
                <h3 className="text-2xl text-left font-bold text-gray-800 mb-5">
                  {experience.title}
                </h3>
                <h2 className="text-xl text-left font-normal text-red-500 mb-5">
                  {experience.startYear} - {experience.endYear}
                </h2>
                <p className="text-gray-800 text-base mb-1 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div
                className="relative bg-gray-200 h-5 mt-auto"
                style={{ width: "100%" }}
              >
                <div
                  className="absolute bg-red-500 h-full"
                  style={{ width: barWidth, left: 0 }}
                />
                <span
                  className="absolute text-white text-xs font-semibold"
                  style={{
                    left: '0',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    whiteSpace: 'nowrap',
                    paddingLeft: '10px',
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
  );
}

export default Experience;
