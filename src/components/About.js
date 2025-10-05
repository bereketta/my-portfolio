import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          About <span>Me</span>
        </h2>
        <p className="about-text">
          Experience in 
          <strong> UI/UX Design</strong>, <strong>Front-end Developer</strong> and <strong>UI/UX design</strong>. 
        
        </p>
        <div className="about-links">
          <a href="https://github.com/bereketta/" className="github" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bereket-tamiru-730910268/" className="linkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
