import React, { useState, useCallback, useEffect } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export const CarouselItem = ({ children }) => {
  return (
    <div className="bg-white px-5 py-10 w-full inline-flex rounded">
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const setIndex = useCallback((newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  }, [children]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex(currentIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, paused, setIndex]);

  const reactChildren = React.Children.toArray(children);

  return (
    <div className="md:px-10">
      <div className="flex flex-row justify-end space-x-3 mb-2">
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setIndex(currentIndex - 1)}
        >
          <MdOutlineArrowBackIosNew className="text-white" />
        </div>
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setIndex(currentIndex + 1)}
        >
          <MdOutlineArrowForwardIos className="text-white" />
        </div>
      </div>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="whitespace-nowrap transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reactChildren.map((child, index) => (
          <div
            key={index}
            className={`inline-block w-full transition-transform duration-1000 ${index === currentIndex ? "scale-100" : "scale-95"}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mt-5">
        {reactChildren.map((_, i) => (
          <p
            onClick={() => setIndex(i)}
            className={`cursor-pointer py-1.5 rounded-full transition-all duration-300 ${
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