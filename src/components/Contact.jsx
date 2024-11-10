import React from "react";
import InfoCard from "./InfoCard";
import SectionCTA from "./SectionCTA";

function Contact() {
  return (
    <div className="w-4/5 mx-auto pt-52" id="contact">
      <InfoCard
        label="Let's connect!"
        className="text-white"
        secondSectionContent={<SectionCTA />}
      />
    </div>
  );
}

export default Contact;
