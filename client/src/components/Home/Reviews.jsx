import React from "react";

function Reviews() {
 
  const experiences = [
    {
      author: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      author: "John Smith",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      author: "Samuel Scott",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        What My Clients Say
        <h3 className="text-xl font-normal text-gray-800 mb-4 py-2">
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
          return (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col justify-between bg-gray-100"
              style={{ position: "relative" }}
            >
              <div className="px-6 py-1">
                <p className="text-gray-800 text-base mb-1 mt-2 text-center">
                  <div className="font-bold text-red-500 text-center text-3xl">
                    "
                  </div>
                  {experience.comment}
                </p>
              </div>
              <hr
                className="border-t-2 border-red-700 mb-2"
                style={{ width: "20%", margin: "15px auto" }}
              />
              <div>
                <p className="text-gray-800 text-base mb-1 text-center">
                  {experience.author}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
