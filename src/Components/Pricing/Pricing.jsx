import React, { useState } from "react";
import Nav from "../Hero/Nav";
import { CgArrowLongRight } from "react-icons/cg";
import image from "../../Assets/Blobs/blob.png";
import { data, steps } from "./Data";
import { Link } from "react-router-dom";  

const Pricing = () => {

  const navigateToFree = (name) => {
    if(name === "Free Trial"){
      window.location.replace("https://house-management-system.netlify.app/")
    }
  };  

  return (
    <section>
      {/* Navigation */}
      <div className="bg-stickyNav">
        <Nav />
      </div>  

      {/* Main Content */}
      <div className="flex flex-col max-w-screen-xl mx-auto my-5 text-center md:my-20">
        <h2 className="text-4xl px-2 font-semibold opacity-[0.9] md:px-0 md:text-6xl z-0">
          Make more online, <span className="text-navColor">for less</span>
        </h2>  

        {/* Image */}
        <div className="flex h-48 w-48 mx-auto mt-5 overflow-hidden rounded-full md:mt-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>

        <h2 className="text-lg px-4 mt-5 opacity-[0.9] md:px-0 md:text-xl z-0 md:mt-10">
          Get house management system at a price that scales with your business.
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-5 md:gap-7 max-w-screen-xl md:mx-auto px-2 md:px-10 mt-10 md:mt-20 md:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col p-5 rounded-md shadow-lg bg-white md:p-7 md:rounded-xl">
            <div className="bg-stickyNav rounded-md py-4 text-white text-center">
              <h2 className="font-semibold">{item.name}</h2>
            </div>
            <p className="my-3 text-sm text-center text-ctaColor">{item.description}</p>
            <div className="flex justify-center items-center mt-5">
              <span className="text-2xl md:text-4xl font-semibold">${item.price}</span>
              <span className="text-sm">/{item.duration}</span>
            </div>
            <Link
              to={item.link}
              onClick={() => navigateToFree(item.name)}
              className={`px-6 py-2 mt-5 text-white rounded ${active === item.link ? "bg-navColor" : "bg-navColor hover:bg-opacity-70"} text-center`}
            >
              {item.buttonText}
              <CgArrowLongRight className="inline ml-1" />
            </Link>
          </div>
        ))}
      </div>

      {/* Steps Section */}
      <div className="flex flex-col max-w-screen-xl mx-auto mt-10 md:mt-20">
        <h2 className="text-4xl font-semibold text-center opacity-[0.9]">Get started in 3 easy steps</h2>
        <div className="grid grid-cols-1 gap-5 mt-10 md:gap-7 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-5 rounded-md shadow-lg bg-white md:p-7 md:rounded-xl">
              <div className="flex items-center justify-center h-14 w-14 bg-stickyNav rounded-full">
                <span className="text-2xl text-white">{index + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-center">{step.title}</h3>
              <p className="mt-2 text-center text-ctaColor">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};  

export default Pricing;