import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function NavbarButton({ href, label, className = "", onClick }) {
  const isExternal = href.startsWith("http");
  
  if (isExternal) {
    return (
      <li className="flex">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          <span
            className={twMerge(
              "text-gray-dark hover:text-white font-medium text-base sm:text-lg md:text-xl transition-colors",
              className
            )}
          >
            {label}
          </span>
        </a>
      </li>
    );
  }
  
  return (
    <li className="flex">
      <Link to={href} onClick={onClick}>
        <span
          className={twMerge(
            "text-gray-dark hover:text-white font-medium text-base sm:text-lg md:text-xl transition-colors",
            className
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default NavbarButton;
