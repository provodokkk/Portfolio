import React from "react";
import { twMerge } from "tailwind-merge";

function ButtonCTA({ text, href = "#", className = "text-blue-custom" }) {
  const classNames = twMerge(
    "text-3xl font-bold hover:underline cursor-pointer",
    className
  );

  return (
    <a
      href={href}
      aria-label={text}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
    >
      {text}
    </a>
  );
}

export default ButtonCTA;
