import React from "react";
import "./Home.css"; // import the CSS file

const Home = () => {
  return (
    <section className="home-section">
      <h1 className="home-title">
        Hi, I’m <span>Bereket Tamiru</span>
      </h1>
      <p className="home-text">
        I’m a passionate <span style={{ color: "#818cf8" }}>React Developer</span> 
        who loves crafting modern, responsive, and user-friendly web applications.
      </p>
      <a href="#projects" className="home-button">
        View My Work →
      </a>
    </section>
  );
};

export default Home;
