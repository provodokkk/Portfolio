import React from "react";
import InfoColumn from "./InfoColumn";

function Hero() {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto pt-10 sm:pt-20">
      <div className="flex flex-col justify-center mb-4 sm:mb-8 py-12 sm:py-24">
        <div>
          <p className="text-gray-dark font-bold text-2xl sm:text-4xl py-1 sm:py-2">
            Danylo Provodov
          </p>
          <p className="text-5xl sm:text-7xl font-bold white-gradient-text">
            Software Developer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-y-6 sm:gap-y-10 pt-8 sm:pt-16">
        <InfoColumn
          header="CURRENT"
          text="AI Empathy Research & Prompt Engineering at UZH"
        />
        <InfoColumn
          header="LOCATION"
          text="Based in Bern, Switzerland"
          className="md:col-start-6 md:col-span-2"
        />
        <InfoColumn
          header="PAST"
          text="Kyiv Polytechnic University, Computer Engineering B.Sc."
          className="md:col-start-10 md:col-span-3"
        />
      </div>
    </section>
  );
}

export default Hero;
