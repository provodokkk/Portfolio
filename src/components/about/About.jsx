import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto pt-12 sm:pt-24">
      <p className="text-5xl sm:text-7xl font-bold text-gray-dark pb-10">About</p>

      <div className="flex flex-col 2xl:flex-row 2xl:items-end relative">
        <div className="w-full 2xl:w-1/2 flex flex-col justify-center">
          <p className="text-3xl sm:text-3xl font-semibold mb-2 text-white">
            Founding Engineer at Cary Ally.
          </p>
          <p className="text-3xl sm:text-3xl font-semibold mb-8 text-white">
            Also contributing to research work at ETH & UZH.
          </p>
          <p className="text-xl sm:text-2xl font-normal text-gray-light mb-14 leading-relaxed">
            Based in Bern, passionate about connecting with
            others, learning new things, and exploring how technology can
            enhance human interaction.
          </p>
          <Link to="/about">
            <span className="text-2xl sm:text-3xl font-semibold hover:underline cursor-pointer text-blue-custom">
              Learn More
            </span>
          </Link>
        </div>

        <div className="hidden 2xl:flex justify-center 2xl:justify-start items-end w-full 2xl:w-1/2 2xl:pl-36 2xl:self-stretch">
          <img
            src={"/memoji-computer.webp"}
            alt={"memoji"}
            className="w-2/3 2xl:w-2/3 2xl:h-full object-contain"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}

export default About;