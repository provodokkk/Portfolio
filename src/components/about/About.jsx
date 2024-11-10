import React from "react";
import ButtonCTA from "../ButtonCTA";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-4/5 mx-auto pt-52">
      <p className="text-7xl font-bold text-gray-dark mb-24">About</p>

      <div className="flex flex-col md:flex-row md:items-center relative">
        <div className="md:w-2/3 flex flex-col justify-center">
          <p className="text-3xl font-medium mb-6">
            Currently an assistant in AI Empathy Research at the University of
            Zurich.
          </p>
          <p className="text-3xl font-medium mb-14">
            I am living in Bern for now, passionate about connecting with
            others, learning new things, and exploring how technology can
            enhance human interaction.
          </p>
          <Link to="/about">
            <ButtonCTA text="Learn More" />
          </Link>
        </div>

        <img
          src={"/memoji-computer.webp"}
          alt={"memoji"}
          className="w-1/3 md:pl-24 mb-10 md:mb-0 flex flex-col justify-center"
          tabIndex="0"
        />
      </div>
    </div>
  );
}

export default About;
