import React from "react";
import { twMerge } from "tailwind-merge";

function InfoColumn({ className, header, text }) {
  return (
    <div className={twMerge("col-span-3", className)}>
      <h3 className="text-xl font-bold text-gray-dark mb-4">{header}</h3>
      <p className="text-lg font-medium text-gray-light">{text}</p>
    </div>
  );
}

export default InfoColumn;
