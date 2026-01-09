import React from "react";
import { twMerge } from "tailwind-merge";

function InfoColumn({ className, header, text }) {
  const textLines = Array.isArray(text) ? text : [text];
  
  return (
    <div className={twMerge("col-span-3", className)}>
      <h3 className="text-xl font-bold text-gray-dark mb-4">{header}</h3>
      {textLines.map((line, index) => (
        <p key={index} className="text-lg font-medium text-gray-light">{line}</p>
      ))}
    </div>
  );
}

export default InfoColumn;
