import React from "react";

import Profile1 from "../Images/Profile1.png";

function Welcome() {
  return (
    <div
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-5"
      style={{
        maxWidth: "1250px",
        height: "500px",
        marginBottom: "30px",
        marginTop: "40px",
      }}
    >
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">
            <h2>
              I am a Fullstack Web Developer <br />
            </h2>
          </div>
          <p className="text-gray-700 text-base">
            I specialize in full-stack development, leveraging my creativity and
            technical knowledge to craft visually appealing user interfaces that
            provide exceptional user experiences through interaction with the
            backend. When I'm not coding, I enjoy traveling and meeting new
            people to establish connections. I emphasize the importance of
            approaching technology with empathy and a human touch, as I believe
            this is what sets great developers apart. Welcome to my world 🌍,
            where design 🎨 and humanity 👏🏾 meet to create amazing user
            experiences!
          </p>
          <a
            href="/about"
            className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Learn More
          </a>
          <br />
          <br />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #WebDevelopment
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #DataVizualization
          </span>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full"
          src={Profile1}
          alt="Educational excursion"
        />
      </div>
    </div>
  );
}

export default Welcome;
