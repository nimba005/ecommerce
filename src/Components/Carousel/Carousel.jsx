import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export const CarouselItem = ({ children }) => {
  return (
    <div className="bg-white px-5 py-10 w-full inline-flex rounded"
    style={{ transform: "scale(1)" }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const setIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex(currentIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, paused, children]);

  const reactChildren = React.Children.toArray(children);

  return (
    <div className="md:px-10">
      <div className="flex flex-row justify-end space-x-3 mb-2">
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setIndex(currentIndex - 1)}
        >
          <MdOutlineArrowBackIos className="text-white" />
        </div>
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setIndex(currentIndex + 1)}
        >
          <MdArrowForwardIos className="text-white" />
        </div>
      </div>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className={`inner whitespace-nonwrap md:space-x-2 duration-1000`}
        style={{ transform: `translate(-${currentIndex * 100}%, 0)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { style: { transform: index === currentIndex ? "scale(0.5)" : "scale(1)" } });
        })}
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mt-5">
        {reactChildren.map((child, i) => (
          <p
            onClick={() => setIndex(i)}
            className={`cursor-pointer py-1.5 rounded-full duration-1000 ${
              i === currentIndex ? "bg-navColor px-3" : "bg-white px-1.5"
            }`}
            key={i}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Carousel;