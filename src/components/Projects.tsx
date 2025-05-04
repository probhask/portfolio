import React from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { ProjectsData } from "@/data/projects";
import GitHubProfileCard from "./GithubProfileCard";

const Projects = () => {
  return (
    <SectionWrapper heading="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <GitHubProfileCard />
      </div>
    </SectionWrapper>
  );
};
Projects.displayName = "Projects";

export default Projects;
