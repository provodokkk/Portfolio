import React from "react";

function FormattedText({ paragraphs }) {
  return (
    <div>
      {paragraphs.map((item, index) => (
        <div key={index}>
          <p className={`text-white text-xl font-bold  ${index > 0 ? "mt-6" : ""}`}>
            {item.headline}
          </p>
          <p className={`text-gray-light mt-2`}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FormattedText;
