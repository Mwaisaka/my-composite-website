import React from "react";

import AboutMe from "../Images/AboutMe.png";

function Card() {
  return (
    <div
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
      style={{
        maxWidth: "1200px",
        height: "500px",
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
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-base">
            <br/><br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <img
          className="w-full h-full"
          src={AboutMe}
          alt="Educational excursion"
        />
      </div>
    </div>
  );
}

export default Card;
