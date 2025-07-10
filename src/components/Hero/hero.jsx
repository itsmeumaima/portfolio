import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import heroimage from "../../assets/pic(umaima).jpg"; 
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="heroSection" aria-label="Introduction">
      <div className="heroContainer">
        <p className="heroHello" aria-label="Greeting">Hello,</p>
        <h1 className="heroTitle">
          I'm <span className="heroName">Umaima</span>
        </h1>
        <h2 className="heroSubtitle">Software Engineering Student</h2>
        <p className="heroDescription">
          I'm Umaima! I'm currently pursuing Software Engineering at NED University. I’m passionate about coding, solving real-world problems with technology, and diving into the world of data science, ML, and creativity. Let's build something awesome together!
        </p>
        <div className="iconRow" role="navigation" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/umaima-abdul-rauf-b6375a294/" 
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/itsmeumaima" 
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:umaimarauf2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="buttonRow">
          <a
            href={`${process.env.PUBLIC_URL}/cv(umaima) (1).pdf`} 
            target="_blank"
            rel="noopener noreferrer"
            className="heroBtn"
            aria-label="Download Resume"
          >
            <FaDownload className="icon" /> Download Resume
          </a>
          <Link to="contact" smooth duration={500} aria-label="Scroll to Contact section">
            <button className="heroBtn">
              <FaEnvelope className="icon" /> Contact Me
            </button>
          </Link>
        </div>
      </div>
      <img src={heroimage} alt="Portrait of Umaima" className="heroImage" />
    </section>
  );
};

export default Hero;
