import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/image.png";


const Hero = () => {
  return (
    <section className="hero flex-col bg-navColor relative" id="home"> 

      {/* hero */}
      <div className="mt-10 h-full pb-10 xl:pb-0 lg:px-5 md:mt-20">
        <div className="flex flex-col h-full mx-auto md:flex-row md:space-x-10 md:max-w-screen-xl">
          <div className="flex flex-col px-2 md:px-0 md:w-1/2">
            <h2 className="text-white text-4xl font-bold capitalize md:text-sz md:leading-1">
              We help you manage your rentals with ease...
            </h2>
            <p className="text-white text-base my-4 lg:text-base xl:text-xl">
              For many property managers, handling their routine tasks consists
              of a large number of juggling task around. Manual performing
              such business operation as tracking rent payments and managing
              maintenance requests is highly time-consuming and often
              overwhelming, and these processes from a small part of what
              property managers face on daily basis. Luckily, We bring you
              an easy solution.
            </p>
            <Link
              to="/pricing"
              className="bg-white border w-max rounded-3xl py-2 px-6 text-base text-navColor font-bold hover:bg-transparent hover:text-white hover:border duration-500"
            >
              Get Started
            </Link>
          </div>
          <div className="hidden h-full mt-10 rounded-t-full overflow-hidden md:w-1/2 md:mt-0 md:flex">
            <img
              src={image}
              alt="Hero"
              className="h-[20rem] w-full object-cover lg:h-[40vw] xl:h-[40rem] md:h-[45vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;