import React from "react";
import { datas } from "./AboutData";
import display1 from "../../Assets/display1.jpeg";
import display2 from "../../Assets/display2.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about mt-10 px-0 lg:px-5 xl:px-0" id="about">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-4xl text-headerColor font-bold text-center md:text-szmd">
          How We Make <span className="text-spanColor">Difference</span>
        </h2>
        <div className="flex flex-col gap-5 md:mt-10 md:flex-row md:mb-32 md:flex-row">
          <div className="relative pl-2 h-48 md:w-1/2 md:h-96 md:pl-0">
            <img
              src={display1}
              alt=""
              className="relative h-full w-3/4 rounded object-contain"
            />
            <img
              src={display2}
              alt=""
              className="absolute -bottom-12 right-0 h-3/4 rounded w-3/4 object-contain md:-right-10"
            />
          </div>
          <div className="flex flex-col px-2 mt-16 md:mt-0 md:w-1/2 md:px-0">
            <p className="w-full mx-auto text-center leading-7 lg:text-sm xl:text-lg">
              As a rental owner or rentals manager, you look forward to a day
              you can control all of your rentals without having to go through
              the stress or the extra miles involved. With a management system,
              you do not have to be present at all times to manage your rentals.
            </p>
            <Link
              to="/pricing"
              className="mt-5 bg-navColor border w-max mx-auto rounded-3xl py-2 px-6 text-base text-white font-bold hover:bg-white hover:text-navColor hover:border duration-500 md:mt-10 md:ml-10"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 mx-auto md:w-[90%] lg:w-full xl:w-[90%]">
          <h2 className="capitalize text-4xl font-bold text-center text-headerColor md:text-szmd md:flex md:flex-row md:flex-wrap">
            Why our product?
          </h2>
          <div className="products space-y-5 grid grid-cols-1 mt-10 px-3 border-b border-t py-4 md:space-y-0 md:px-0 md:flex md:flex-row md:flex-wrap">
            {datas.map((data, i) => (
              <div
                className="bg-white flex flex-col items-center py-5 rounded hover:bg-hoverColor text-white ease-in-out duration-1000 md:w-1/2 md:flex-row md:bg-transparent"
                key={i}
              >
                <div className="flex justify-center items-center rounded-full overflow-hidden md:w-1/3">
                  <img
                    src={data.img}
                    alt=""
                    className="h-24 w-24 m-auto rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col px-2 text-center md:w-3/4 md:px-0 md:text-start">
                  <h2 className="text-headerColor text-xl font-semibold">
                    {data.title}.
                  </h2>
                  <p className="text-headerColor leading-7 lg:text-sm xl:text-lg">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;