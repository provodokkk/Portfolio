import React from "react";
import InfoCard from "./InfoCard";
import SectionCTA from "./SectionCTA";

function Contact() {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto pt-52" id="contact">
      <InfoCard
        label="Let's connect!"
        className="text-white text-5xl sm:text-7xl"
        secondSectionContent={<SectionCTA />}
      />
    </div>
  );
}

export default Contact;
