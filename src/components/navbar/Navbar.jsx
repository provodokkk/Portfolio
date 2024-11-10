import React from "react";
import Logo from "./Logo";
import links from "../../data/Links";
import NavbarButton from "./NavbarButton";

function Navbar() {
  const resumeItem = links.find((link) => link.label === "Resume");

  const handleScroll = (e) => {
    e.preventDefault();
    window.location.href = "/#contact";
  };

  return (
    <nav className="flex justify-between items-center w-4/5 mx-auto py-6">
      <Logo />

      <ul className="flex space-x-6 md:space-x-10">
        <NavbarButton
          href={resumeItem.href}
          label="Resume"
          className="text-white rounded-full px-4 py-1 hover:bg-white hover:text-gray-dark"
        />
        <NavbarButton href="/about" label="About" />
        <li>
          <a onClick={handleScroll}>
            <span className="text-gray-dark hover:text-white font-medium text-lg md:text-xl hover:cursor-pointer">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
