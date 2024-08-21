import React from "react";
import Welcome from "../Home/Welcome";
import Bio from "../Home/Bio";
import Services from "./Services";
import Profile1 from "../Images/Profile1.png";
import AboutMe from "../Home/AboutMe";
import Experience from "./Experience";

export default function Home() {
  let slides = [
    {
      image: Profile1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      image: Profile1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      image: Profile1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      image: Profile1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <div className="w-full m-auto pt-3 max-w-none">
      <Welcome />
      <AboutMe />
      <Services />
      <Experience />
      <Bio slides={slides} />
    </div>
  );
}
