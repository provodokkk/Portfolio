import React from "react";
import InfoCard from "../InfoCard";
import ToolList from "../ToolList";
import ButtonCTA from "../ButtonCTA";
import PlainText from "../PlainText";
import { useParams } from "react-router-dom";
import FormattedText from "../FormattedText";
import projectData from "../../data/projectsData";
import NotFoundPage from "../../pages/NotFoundPage";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <NotFoundPage errorMessage={`Project ${params.projectId} — Not found`} />
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <p className="text-7xl font-bold text-white my-24">{project.name}</p>
        {/* Video/Image Section */}
        <div className="project-card relative border-2 border-gray-dark rounded-lg mb-24">
          {project.video ? (
            <video className="w-full" autoPlay controls loop muted>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={project.image} alt={project.name} className="w-full" />
          )}
        </div>

        <InfoCard
          label="Overview"
          secondSectionContent={<PlainText paragraphs={project.overview} />}
        />
        <InfoCard
          label="Objective"
          secondSectionContent={<PlainText paragraphs={project.objective} />}
        />
        <InfoCard
          label="Core Functionality"
          secondSectionContent={
            <FormattedText paragraphs={project.coreFunctionality} />
          }
        />
        <InfoCard
          label="Tools & Technologies"
          secondSectionContent={<ToolList tools={project.tools} />}
        />
        <InfoCard
          label="Links"
          secondSectionContent={
            <div className="flex flex-col space-y-4 mt-8">
              {projectData[projectId - 1].links.map((link, index) => (
                <ButtonCTA
                  key={index}
                  text={link.text}
                  className="text-gray-light"
                  href={link.href}
                />
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
