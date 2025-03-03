import React from 'react';
import { FaAlgolia, FaJava, FaLinkedinIn, FaReact, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMongodb, SiRust, SiMysql, SiSpringboot } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 justify-between">
      {/* Find Me In Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/anujagarwal900/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>

      {/* Best Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best Skills</h2>
        <div className="flex flex-wrap gap-4 max-w-[400px]">
          <span className="bannerIcon"><FaReact /></span>
          <span className="bannerIcon"><FaJava /></span>
          <span className="bannerIcon"><SiSpringboot /></span>
          <span className="bannerIcon"><SiTailwindcss /></span>
          <span className="bannerIcon"><FaAlgolia /></span>
          <span className="bannerIcon"><FaPython /></span>
          <span className="bannerIcon"><SiDjango /></span>
          <span className="bannerIcon"><FaGitAlt /></span>
          <span className="bannerIcon"><FaDocker /></span>
          <span className="bannerIcon"><SiMysql /></span>
          <span className="bannerIcon"><SiMongodb /></span>
          <span className="bannerIcon"><SiRust /></span>
        </div>
      </div>
    </div>
  );
};

export default Media;
