import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const slideIntervalTime = 5000;

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, slideIntervalTime);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div
      className="overflow-hidden relative"
      style={{
        maxWidth: "1200px",
        height: "500px",
        marginBottom: "30px",
        marginTop: "20px",
      }}
    >
      <div
        className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="relative w-full flex-none"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={s.image}
              className="w-full h-full object-cover"
              alt="Slide"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-5"
            >
              <span className="text-2xl font-bold text-white text-center">
                {s.content}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
