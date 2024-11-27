import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto pt-12 sm:pt-24">
      <p className="text-5xl sm:text-7xl font-bold text-gray-dark mb-24">About</p>

      <div className="flex flex-col lg:flex-row lg:items-center relative">
        <div className="lg:w-2/3 flex flex-col justify-center">
          <p className="text-2xl sm:text-3xl font-medium mb-6">
            Currently an assistant in AI Empathy Research at the University of
            Zurich.
          </p>
          <p className="text-2xl sm:text-3xl font-medium mb-14">
            I am living in Bern for now, passionate about connecting with
            others, learning new things, and exploring how technology can
            enhance human interaction.
          </p>
          <Link to="/about">
            <span className="text-2xl sm:text-3xl font-bold hover:underline cursor-pointer text-blue-custom">
              Learn More
            </span>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-start w-full lg:w-1/3 mt-10 lg:mt-0">
          <img
            src={"/memoji-computer.webp"}
            alt={"memoji"}
            className="w-2/3 sm:w-1/2 lg:w-full lg:pl-24 flex flex-col justify-center"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
