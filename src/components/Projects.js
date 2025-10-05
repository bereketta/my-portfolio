import React from "react";
import "./Projects.css";

const projectImages = [
  { src: "/projects/project1.png", alt: "Portfolio Website" },
  { src: "/projects/project2.png", alt: "Task Manager App" },
  { src: "/projects/project3.png", alt: "Blog CMS" },
  { src: "/projects/project4.png", alt: "Blog CMS" },
  { src: "/projects/project5.png", alt: "Blog CMS" },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectImages.map((image, index) => (
        <div key={index} className="project-wrapper">
          <img src={image.src} alt={image.alt} className="project-image" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
