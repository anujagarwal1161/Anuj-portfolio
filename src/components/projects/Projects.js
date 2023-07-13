import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard 
          title="ZEALICON WEBSITE[COLLEGE ANNUAL TECHNO-CULTURAL FEST]"
          des=" This website is used by Delhi NCR college to know about the events of the fest and purchase the zeal id to attend the fest and is build using React JS and Django."
          src={projectOne}
        />
        <ProjectsCard
          title="Github Finder"
          des="This project is build using HTML CSS JAVASCRIPT and it can find your github profile and the latest five repositories that uou have created as soon as you enter your github username."
          src={projectTwo}
        />
        <ProjectsCard
          title="E-Commerce Website"
          des="This is an e-commerce hub nothing short of amazon and you can actually buy items online."
          src={projectThree}
        />
        <ProjectsCard
          title="Fund Trail Analysis Tool"
          des="This is a project i created in Kavach-2023 which is a hackathon organized by Indian Government using React and Cyber security."
          src={projectThree}
        />
        <ProjectsCard
          title="Contact Manager"
          des="This is my another personal project where i have created a contact manager using react and redux which can manage your Contact List."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
