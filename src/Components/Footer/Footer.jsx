import React from "react";
import logo from "../../Assets/logo2.png";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import qwarqo from "../../Assets/qwarqo.png";
import discover from "../../Assets/Payments/discover.jpeg";
import master from "../../Assets/Payments/master.jpg";
import mpesa from "../../Assets/Payments/mpesa.jpeg";
import paypal from "../../Assets/Payments/paypal.png";
import visa from "../../Assets/Payments/visa.jpg";  

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#686a71]-1000 md:pt-4 lg:px-5 xl:px-0">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="flex flex-col px-2 space-y-5 md:w-[40%] md:px-0">
            <div className="flex flex-col border-b pb-2 md:space-y-2 md:-mt-6">
              <a href="#home" className="flex flex-row items-center">
                <img
                  src={logo}
                  alt="our logo"
                  className="h-16 w-16 md:h-24 md:w-24"
                />
                <p className="text-navColor text-xl font-semibold italic md:text-2xl">
                  Renters Success
                </p>
              </a>
              <p className="text-lg text-navColor lg:text-lg xl:text-xl">
                We make rental management simple, secure and comfortable for you
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-navColor text-lg font-semibold lg:text-lg xl:text-xl">
                Join Our Newsletter & Marketing Communication
              </h2>
              <p className="text-navColor md:text-lg">
                We'll send you news and offers.
              </p>
            </div>
            <form className="flex xl:w-[75%]">
              <input
                type="text"
                placeholder="you@yours.com"
                className="w-3/4 px-2 py-2 border outline-none rounded-l-lg md:py-3"
              />
              <input
                type="submit"
                value="Go"
                className="bg-navColor text-white text-lg py-2 w-1/4 rounded-r-lg"
              />
            </form>
            {/* icons for desktop */}
            <div className="hidden flex-row items-center gap-5 md:flex">
              <a href="https://twitter.com/nimbajohn">
                <BsTwitter className="text-navColor text-3xl" />
              </a>
              <a href="https://twitter.com/nimbajohn">
                <BsLinkedin className="text-navColor text-3xl" />
              </a>
              <a href="https://twitter.com/nimbajohn">
                <AiFillInstagram className="text-navColor text-4xl" />
              </a>
              <a href="https://wa.me/254746133309">
                <BsWhatsapp className="text-navColor text-3xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col pl-2 space-y-3 md:space-y-0 md:justify-between md:flex-row md:w-[60%] md:pl-0">
            <div className="flex flex-col space-y-4 mt-5 md:mt-0 xl:ml-24">
              <div className="flex flex-col">
                <h2 className="text-lg text-navColor font-bold mb-2">CALL</h2>
                <a href="tel:+254746133309" className="text-base text-navColor">
                  Tel: +254791686851
                </a>
                <span className="block text-navColor font-semibold my-1">Or</span>
                <a href="tel:+254782339290" className="text-base text-navColor">
                  Tel: +254782339290
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-lg text-navColor font-bold">HELP</h2>
                <a
                  href="mailto:info@rentalsuccess.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center text-base text-navColor"
                >
                  <MdOutlineMailOutline className="mr-1" /> info@rentalsuccess.com
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-navColor text-lg font-semibold">QUICK LINKS</h2>
              <a href="#about" className="text-navColor text-base md:text-lg">Home</a>
              <a href="#about" className="text-navColor text-base md:text-lg">About Us</a>
              <a href="#about" className="text-navColor text-base md:text-lg">Contact Us</a>
              <Link to="/pricing" className="text-navColor text-base">Pricing</Link>
              <Link to="/privacy-policy" className="text-navColor text-base">Privacy Policy</Link>
              <Link to="/terms and conditions" className="text-navColor text-base">Terms and Conditions</Link>
              <Link to="/" className="text-navColor text-base">FAQ</Link>
              <Link
                to="/pricing"
                className="hidden mt-2 bg-navColor border w-max rounded-3xl py-2 px-6 text-base text-white font-bold hover:bg-white hover:text-navColor hover:border duration-500 md:mt-10 md:flex"
              >
                Get started
              </Link>
            </div>
            
            {/* icons for mobile */}
            <div className="flex flex-row items-center gap-3 md:hidden">
              <a href="https://twitter.com/nimbajohn">
                <BsTwitter className="text-navColor text-2xl" />
              </a>
              <a href="https://twitter.com/nimbajohn">
                <BsLinkedin className="text-navColor text-2xl" />
              </a>
              <a href="https://twitter.com/nimbajohn">
                <AiFillInstagram className="text-navColor text-3xl" />
              </a>
              <a href="https://wa.me/254746133309">
                <BsWhatsapp className="text-navColor text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col px-2 md:px-0 md:justify-between md:flex-row">
          <a
            href="https://qwarqo.com/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-start"
          >
            <img
              src={qwarqo}
              alt="listing company"
              className="h-6 object-contain md:h-8"
            />
            <p className="text-navColor text-sm italic md:text-lg">
              List your property with Qwarqo
            </p>
          </a>
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-row items-center text-sm text-navColor text-center mt-4 md:hidden">
              <AiOutlineCopyrightCircle />
              Renters Success
            </p>
            <div className="flex flex-row items-center justify-end space-x-1 mt-4 md:mt-0 md:space-x-2">
              <img
                src={mpesa}
                alt=""
                className="h-4 w-15 md:h-7 md:w-15 object-contain"
              />
              <img
                src={master}
                alt=""
                className="h-4 w-15 md:h-7 md:w-15 object-contain"
              />
              <img
                src={discover}
                alt=""
                className="h-4 w-15 md:h-7 md:w-15 object-contain"
              />
              <img
                src={visa}
                alt=""
                className="h-4 w-15 md:h-7 md:w-15 object-contain"
              />
              <img
                src={paypal}
                alt=""
                className="h-4 w-15 md:h-7 md:w-15 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <p className="flex flex-row items-center text-base text-navColor text-center mt-4">
            copyright 2022
            <AiOutlineCopyrightCircle />
            <a href="#home">Renters Success</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;