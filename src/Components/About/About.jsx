import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo2.png";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  const toggleMenu = () => {
    setIsActive((prevActive) => !prevActive);
  };  

  return (
    <nav
      className={`py-0 md:px-2 z-50 ${
        isSticky ? "fixed w-full top-0 bg-stickyNav" : ""
      }`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto max-w-full md:max-w-screen-xl">
        <Link
          to="/"
          className="flex flex-row items-center h-16 md:h-20 lg:h-20 xl:h-20 z-50"
        >
          <img src={logo} alt="Logo" className="h-full" />
          <p className="text-white text-base font-semibold italic md:text-lg">
            Renters Success
          </p>
        </Link>
        <div
          className={`flex flex-col items-center absolute ${
            isActive ? "top-[4rem]" : "top-[-450%]"
          } duration-500 w-full pb-4 bg-navColor space-y-3 md:flex-row md:pb-0 md:bg-none md:space-x-5 md:space-y-0 md:relative md:w-max md:top-0`}
        >
          <a href="#home" className="text-white text-lg font-bold">
            Home
          </a>
          <a href="#about" className="text-white text-lg font-bold">
            About
          </a>
          <a href="#contacts" className="text-white text-lg font-bold">
            Contact
          </a>
          <Link to="/pricing" className="text-white text-lg font-bold">
            Pricing
          </Link>
          <a href="#pricing" className="text-white text-lg font-bold">
            Testimonials
          </a>
          <Link
            to="/pricing"
            className="flex bg-white w-max rounded-3xl py-1 px-6 text-base text-navColor font-bold hover:bg-navColor hover:text-white hover:border duration-700 md:hidden"
          >
            Get started
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link
            to="/pricing"
            className="bg-white rounded-3xl py-2 px-6 text-base text-navColor font-bold hover:bg-navColor hover:text-white hover:border duration-700"
          >
            Get started
          </Link>
        </div>
        <div className="flex mr-1 md:hidden z-50" onClick={toggleMenu} aria-label="Toggle menu">
          <AiOutlineMenu className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};  

export default Nav; 