import React from "react";

function PlainText({ paragraphs }) {
  return (
    <div>
      {paragraphs.map((text, index) => (
        <p key={index} className={`text-gray-light ${index > 0 ? "mt-4" : ""}`}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default PlainText;
