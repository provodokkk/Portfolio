import React from "react";
import links from "../data/Links";
import ButtonCTA from "./ButtonCTA";

function ContactButtons() {
  return (
    <div className="flex flex-col space-y-4 mt-4 sm:mt-8">
      {links.map(({ href, label }) => {
        if (label === "Email") return null;
        return (
          <ButtonCTA
            key={label}
            text={label}
            className="text-gray-light text-2xl sm:text-3xl"
            href={href}
          />
        );
      })}

      <ButtonCTA
        text="danylo.provodov@gmail.com"
        className="text-white text-xl sm:text-3xl"
        href="mailto:danylo.provodov@gmail.com"
      />
    </div>
  );
}

export default ContactButtons;
