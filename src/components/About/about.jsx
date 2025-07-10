import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="about" className="aboutSection" aria-label="About Me">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2 className="aboutHeading">About Me</h2>
          <p className="aboutDescription">
            I'm <strong>Umaima</strong>, a passionate software engineering student at NED University. I'm deeply interested in data science, machine learning, and using code to solve real-world problems. I love working on projects that bring together creativity and logic.
          </p>
          <p className="aboutDescription">
            When I’m not immersed in code, you'll find me sketching, exploring books, or working on personal side projects. I believe in continuous learning and strive to grow with every challenge I take on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
