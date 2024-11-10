import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 cursor-pointer"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center rounded-lg">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ image, name, description, projectId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="project-card flex flex-col md:flex-row md:items-center rounded-lg pt-24 relative">
      {/* Small Image */}
      <img
        src={image}
        alt={`${name} thumbnail`}
        onClick={toggleModal}
        className="w-full md:w-1/2 mb-10 md:mb-0 rounded-lg cursor-pointer border border-gray-dark/60"
        tabIndex="0"
      />

      {/* Text Content */}
      <div className="md:w-1/2 md:pl-24 flex flex-col justify-center">
        <h3 className="text-4xl font-medium mb-8 hover:underline">
          <Link to={`/project/${projectId}`}>{name}</Link>
        </h3>
        <p className="text-lg text-gray-light mb-8">{description}</p>
      </div>

      {/* Modal for Full-Resolution Image */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img
            src={image}
            alt={`${name} full-size`}
            className="rounded-lg"
          />
        </Modal>
      )}
    </div>
  );
}

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
