import React from "react";
import InfoCard from "../InfoCard";
import ToolList from "../ToolList";
import PlainText from "../PlainText";
import SectionCTA from "../SectionCTA";
import FormattedText from "../FormattedText";
import aboutData from "../../data/aboutData";

function AboutDetails() {
  const { about, education, tools, beyond } = aboutData;

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <InfoCard
          label={about.headline}
          secondSectionContent={<PlainText paragraphs={about.text} />}
        />
        <InfoCard
          label={education.headline}
          secondSectionContent={
            <FormattedText paragraphs={education.universities} />
          }
        />
        <InfoCard
          label={tools.headline}
          secondSectionContent={<ToolList tools={tools.list} />}
        />
        <InfoCard
          label={beyond.headline}
          secondSectionContent={<FormattedText paragraphs={beyond.list} />}
        />
        <InfoCard
          label="Let's connect!"
          className="text-white"
          secondSectionContent={<SectionCTA />}
        />
      </div>
    </div>
  );
}

export default AboutDetails;
