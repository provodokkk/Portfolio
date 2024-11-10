import React from "react";
import InfoColumn from "./InfoColumn";

function Hero() {
  return (
    <section className="w-4/5 mx-auto pt-20">
      <div className="flex flex-col justify-center mb-8 py-24">
        <div>
          <p className="text-gray-dark font-bold text-4xl py-2">
            Danylo Provodov
          </p>
          <p className="text-7xl font-bold white-gradient-text">
            Software Developer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 pt-16">
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
