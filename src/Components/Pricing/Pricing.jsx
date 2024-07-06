import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import image from "../../Assets/Blobs/blob.png";
import { data, steps } from "./Data";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [active, setActive] = useState("#");

  const handleGetStartedClick = (name) => {
    let url = "";
    switch (name) {
      case "Free Trial":
        url = "https://house-management-system.netlify.app/";
        break;
      case "Basic":
        url = "https://house-management-system.netlify.app/";
        break;
      case "Premium":
        url = "https://house-management-system.netlify.app/";
        break;
      case "VIP":
        url = "https://house-management-system.netlify.app/";
        break;
      default:
        url = "https://house-management-system.netlify.app/";
    }
    window.location.replace(url);
  };

  return (
    <section>
      {/* nav */}
      <div className="bg-stickyNav z-50"></div>
      <div className="flex flex-col max-w-screen-xl mx-auto my-5 text-center md:my-20">
        <h2 className="text-4xl px-2 font-semibold opacity-[0.9] md:px-0 md:text-6xl z-0">
          Make more online, <span className="text-navColor">for less</span>
        </h2>
        <div className="flex h-48 w-48 mx-auto mt-5 overflow-hidden rounded-full md:mt-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <h2 className="text-2xl text-navColor font-semibold">
          Explore current top deals
        </h2>
        <p className="text-[#686a71] px-2 md:px-0">
          Check out our best deals across our product range, and get what's best
          for you
        </p>
        <div className="bg-[#dbdcdc] flex flex-row w-max mx-auto mt-5 rounded-lg">
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 rounded-l-lg ${
              active === "#" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("#")}
          >
            All
          </p>
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 ${
              active === "1" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("1")}
          >
            Individual
          </p>
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 rounded-r-lg ${
              active === "2" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("2")}
          >
            Sacco
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-10 mx-auto mt-10 md:space-y-0 md:w-[75%] md:flex md:flex-row md:space-x-5">
          {data.map((offer, i) => (
            <div className="flex flex-col w-[80%] md:w-1/4 mx-auto" key={i}>
              <div className="bg-white flex flex-col relative  w-full h-[13rem] max-h-[14rem] rounded-lg px-4 pt-5">
                <h2 className="absolute left-2 -top-3 bg-navColor text-white text-sm px-2 py-1 rounded">
                  $
                  {Math.floor(
                    ((offer.original - offer.price) / offer.original) * 100
                  )}
                  % Off
                </h2>
                <h2 className="text-xl font-semibold">{offer.name}</h2>
                <p className="mt-5 text-4xl font-bold xl:text-5xl lg:text-2xl">
                  ${offer.price}{" "}
                  <span className="text-base align-top">/month</span>
                </p>
                <p className="line-through mt-1 opacity-[0.7] font-semibold">${offer.original}</p>
                <button onClick={() => handleGetStartedClick(offer.name)} className="bg-navColor absolute bottom-2 left-[5%] w-[90%] py-2 rounded text-white font-semibold">
                  Get Started
                </button>
              </div>
              <div onClick={() => handleGetStartedClick(offer.name)} className="text-start mt-2 cursor-pointer">
                {offer.description}{" "}
                <span className="flex flex-row items-end block text-navColor">
                  Go to {offer.name}{" "}
                  <CgArrowLongRight className="text-xl ml-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-2 md:px-0">
          <div className="bg-[#dbdcdc] p-3 items-center rounded-xl flex flex-col mt-10 mx-auto md:mt-20 md:p-5 md:flex-row md:w-3/4">
            <div className="flex flex-col md:w-3/4">
              <h2 className="text-2xl font-semibold opacity-[0.9] md:text-3xl text-start">
                Finding it hard to choose a plan? We can help
              </h2>
              <p className="text-start mt-1">
                Take our quiz to discover the perfect match for your needs.
              </p>
            </div>
            <div className="flex justify-end md:w-1/4">
              <Link
                to="/pricing"
                className="bg-navColor rounded-xl py-2 px-6 h-max text-sm text-white font-bold md:text-lg hover:bg-white hover:text-navColor hover:border duration-1000"
              >
                Take Quize
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:mt-20">
          <h2 className="text-3xl font-semibold opacity-[0.9] md:text-5xl">
            Get Started With Simple Steps
          </h2>
          <div className="flex flex-col px-5 mx-auto mb-10 space-y-10 md:mt-10 md:w-3/4 md:px-0">
            {steps.map((step, i) =>(
                <div className="steps flex flex-col  md:even:flex-row-reverse md:odd:text-start md:flex-row" key={i}>
                    <div className="h-48 md:w-1/2">
                        <img src={step.img} alt="" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <h2 className="text-2xl font-semibold text-navColor md:text-start">{steps.indexOf(step) + 1}. {step.step}</h2>
                        <p className="mt-2 md:w-3/4 md:text-start">{step.desc}.</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
