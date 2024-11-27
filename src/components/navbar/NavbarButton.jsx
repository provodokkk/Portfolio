import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function NavbarButton({ href, label, className = "" }) {
  return (
    <li className="flex justify-center sm:justify-start">
      <Link to={href}>
        <span
          className={twMerge(
            "text-gray-dark hover:text-white font-medium text-lg sm:text-xl",
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
