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
          I’m an enthusiastic developer with experience in 
          <strong> React</strong>, <strong>JavaScript</strong>, and <strong>UI/UX design</strong>. 
          I enjoy building modern, responsive, and user-friendly web applications 
          that make a difference.
        </p>
        <div className="about-links">
          <a href="https://github.com/yourusername" className="github" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="linkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
