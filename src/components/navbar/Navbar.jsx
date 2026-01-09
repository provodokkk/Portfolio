import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import links from "../../data/Links";
import NavbarButton from "./NavbarButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeItem = links.find((link) => link.label === "Resume");

  useEffect(() => {
    const scrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    if (window.location.hash === "#contact" || sessionStorage.getItem("scrollToContact") === "true") {
      sessionStorage.removeItem("scrollToContact");
      scrollToContact();
    }
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu when clicking contact
    const contactSection = document.getElementById("contact");
    
    if (window.location.pathname === "/about" && contactSection) {
      // On about page, scroll to contact section on same page
      window.location.hash = "#contact";
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname === "/") {
      // On main page, scroll to contact section
      if (contactSection) {
        window.location.hash = "#contact";
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, redirect to main page with contact section
      sessionStorage.setItem("scrollToContact", "true");
      window.location.href = "/#contact";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center w-full sm:w-4/5 mx-auto py-4 sm:py-6 relative">
      <Logo />

      {/* Hamburger button for mobile */}
      <button
        onClick={toggleMenu}
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-light transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-light transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-light transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Desktop menu */}
      <ul className="hidden sm:flex flex-row items-center space-x-6">
        <NavbarButton
          href={resumeItem.href}
          label="Resume"
          className="text-gray-light rounded-full px-4 hover:bg-white hover:text-gray-dark transition-colors"
        />
        <NavbarButton 
          href="/about" 
          label="About"
        />
        <li className="flex">
          <a onClick={handleScroll}>
            <span className="text-gray-dark hover:text-white font-medium text-lg md:text-xl hover:cursor-pointer transition-colors">
              Contact
            </span>
          </a>
        </li>
      </ul>

      {/* Mobile menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href={resumeItem.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-light text-2xl rounded-full px-6 py-3 hover:bg-white hover:text-gray-dark transition-colors"
          >
            Resume
          </a>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-dark hover:text-white text-2xl font-medium transition-colors"
          >
            About
          </Link>
          <a 
            onClick={handleScroll} 
            className="text-gray-dark hover:text-white text-2xl font-medium transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
