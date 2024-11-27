import React from "react";
import links from "../data/Links";

function Footer() {
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto mt-36 py-14 border-t-2 border-gray-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex items-end space-x-12">
          {links.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <span className="hover:text-blue-custom text-2xl">{icon}</span>
            </a>
          ))}
        </div>

        <div className="flex lg:justify-end">
          <span className="text-gray-dark text-lg">© Danylo Provodov 2024</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
