import React from "react";
import { Link } from "react-router-dom";

/**
 * ProjectCard component displays project information with clickable image and title
 * Both image and title redirect to the project detail page
 */
function ProjectCard({ image, name, description, projectId }) {
  return (
    <div className="project-card flex flex-col md:flex-row md:items-center rounded-lg my-24 relative">
      {/* Clickable Image - redirects to project page */}
      <Link to={`/project/${projectId}`} className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src={image}
          alt={`${name} thumbnail`}
          className="w-full rounded-lg cursor-pointer border border-gray-dark/60 hover:opacity-80 transition-opacity duration-300"
        />
      </Link>

      {/* Text Content */}
      <div className="md:w-1/2 md:pl-24 flex flex-col justify-center">
        <h3 className="text-2xl sm:text-4xl font-medium mb-8">
          <Link 
            to={`/project/${projectId}`}
            className="text-white underline hover:text-gray-light transition-colors duration-300"
          >
            {name}
          </Link>
        </h3>
        <p className="text-lg text-gray-light mb-8">{description}</p>
      </div>
    </div>
  );
}

/**
 * ProjectsList component renders a list of project cards
 */
const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          name={project.name}
          description={project.description}
          projectId={index + 1}
        />
      ))}
    </>
  );
};

export default ProjectsList;