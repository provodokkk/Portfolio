import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/hero/Hero";
import Contact from "../components/Contact";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-4/5">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
