import React from "react";
import links from "../data/Links";

function ContactButtons() {
  return (
    <div className="flex flex-col space-y-4 mt-4 sm:mt-8">
      {links.map(({ href, label }) => {
        if (label === "Email") return null;
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-light text-2xl sm:text-3xl font-semibold hover:underline cursor-pointer"
          >
            {label}
          </a>
        );
      })}

      <a
        href="mailto:danylo.provodov@gmail.com"
        aria-label="Email"
        className="text-white text-xl sm:text-3xl font-semibold hover:underline cursor-pointer"
      >
        danylo.provodov@gmail.com
      </a>
    </div>
  );
}

export default ContactButtons;
