import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import ProjectDetails from "../components/projects/ProjectDetails";

function ProjectPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-4/5">
        <Navbar />
        <ProjectDetails />
        <Footer />
      </section>
    </div>
  );
}

export default ProjectPage;
