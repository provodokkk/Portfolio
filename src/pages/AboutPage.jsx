import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import AboutDetails from "../components/about/AboutDetails";

function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-4/5 mx-auto">
        <Navbar />
        <AboutDetails />
        <Footer />
      </section>
    </div>
  );
}

export default AboutPage;
