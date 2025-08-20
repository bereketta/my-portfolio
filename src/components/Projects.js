import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Portfolio Website (React)</h3>
          <p className="project-description">
            A modern personal portfolio built with React showcasing skills, projects, and contact info.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-title">Task Manager App</h3>
          <p className="project-description">
            A productivity app to create, manage, and track daily tasks with a clean UI.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-title">Blog CMS</h3>
          <p className="project-description">
            A content management system for creating, editing, and publishing blog posts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
