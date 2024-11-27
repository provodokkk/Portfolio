import React, { useEffect } from "react";
import Logo from "./Logo";
import links from "../../data/Links";
import NavbarButton from "./NavbarButton";

function Navbar() {
  const resumeItem = links.find((link) => link.label === "Resume");

  useEffect(() => {
    if (window.location.hash === "#contact" || sessionStorage.getItem("scrollToContact") === "true") {
      sessionStorage.removeItem("scrollToContact");
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollToContact", "true");
      window.location.href = "/";
    }
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto py-6">
      <Logo />

      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
        <NavbarButton
          href={resumeItem.href}
          label="Resume"
          className="text-white rounded-full px-4 hover:bg-white hover:text-gray-dark"
        />
        <NavbarButton href="/about" label="About" />
        <li className="flex justify-center md:justify-start">
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
