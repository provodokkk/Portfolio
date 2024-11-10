import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function NavbarButton({ href, label, className = "" }) {
  return (
    <li>
      <Link to={href}>
        <span
          className={twMerge(
            "text-gray-dark hover:text-white font-medium text-lg md:text-xl",
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
