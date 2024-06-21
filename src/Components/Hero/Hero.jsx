import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/image.jpg";
import Nav from "./Nav";

const Hero = () => {
  return (
    <section className="hero flex-col bg-navColor relative" id="home">
      {/* nav */}

      <Nav />

      {/* hero */}
      <div className="mt-10 h-full pb-10 xl:pb-0 lg:px-5 md:mt-20">
        <div className="flex flex-col h-full mx-auto md:flex-row md:space-x-10 md:max-w-screen-xl">
          <div className="flex flex-col px-2 md:px-0 md:w-1/2">
            <h2 className="text-white text-4xl font-bold capitalize md:text-sz md:leading-1">
              We help you manage your rentals with ease...
            </h2>