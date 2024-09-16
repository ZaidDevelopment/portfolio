import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { PROJECT_CARDLIST } from "../../constants";

const Projects = () => {
  return (
    <section className="w-full bg-gray-100" id="projects">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h1 className="text-center text-2xl font-semibold sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_CARDLIST.map((project) => (
            <ProjectCard
              key={project.title} // Using title as key as titles are unique
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
    </section>
  );
};

export default Projects;
