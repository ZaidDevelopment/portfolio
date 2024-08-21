import React from "react";
import { PROJECT_CARDLIST } from "../../constants";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full bg-[#f5f5f5]" id="projects">
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h1 className="py-20 text-center text-2xl font-semibold sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECT_CARDLIST.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.image}
              imageWidth={project.width}
              imageHeight={project.height}
              title={project.title}
              description={project.description}
              page={project.page}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
