import React from "react";
import { twMerge } from "tailwind-merge";

const InfoCard = ({ label, secondSectionContent, className = "" }) => {
  return (
    <div className="w-full mt-24">
      <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-start">
          <p
            className={twMerge("text-5xl sm:text-7xl font-bold text-gray-dark", className)}
          >
            {label}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 text-lg">{secondSectionContent}</div>
      </div>
    </div>
  );
};

export default InfoCard;
