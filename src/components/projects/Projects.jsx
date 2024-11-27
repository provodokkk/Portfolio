import React from "react";
import ProjectsList from "./ProjectCard";
import projectData from "../../data/projectsData";

function Projects() {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto pt-52">
      <p className="text-5xl sm:text-7xl font-bold text-gray-dark pb-10">
        Featured Projects
      </p>

      <ProjectsList projects={projectData} />
    </section>
  );
}

export default Projects;
