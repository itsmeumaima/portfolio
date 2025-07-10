import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import smsSpamClassifierImage from "../../assets/sms_dashboard.png";
import laptopImage from "../../assets/laptop_dashboard.jpg";
import movieImage from "../../assets/movie_dashboard.jpeg";
import lmsImage from "../../assets/lms_dashboard.png";

function Projects() {
  const projects = [
    {
      name: "Laptop Price Predictor",
      description:
        "A machine learning-powered web application that predicts the price of a laptop based on its specifications. Built with Flask, Scikit-learn, and Bootstrap, this app allows users to input various laptop features and get a predicted price using a trained regression model.",
      tools: [
        "Html", "Css", "Flask", "Scikit-learn", "Pickle", "Pandas", "Seaborn",
      ],
      github: "https://github.com/itsmeumaima/Laptop_Price_Predictor",
      image: laptopImage,
    },
    {
      name: "Movie Recommendation System",
      description:
        "A content-based movie recommendation system that uses cosine similarity to suggest movies based on user input. Built with Python and deployed using Streamlit.",
      tools: ["Python", "Pandas", "Sklearn", "Pickle", "Streamlit"],
      github: "https://github.com/itsmeumaima/MovieRecommendationSystem",
      image: movieImage,
    },
    {
      name: "SMS Spam Classifier",
      description:
        "A machine learning model that classifies SMS messages into spam and ham categories. Built with Python and deployed using Flask.",
      tools: ["Python", "Flask", "Scikit-learn", "Pandas", "Seaborn"],
      github:
        "https://github.com/itsmeumaima/SMS_Spam_Classifier",
      image: smsSpamClassifierImage,
    },
    {
      name: "Learning Management System",
      description:
        "A full-stack LMS web app for course management, analytics, course purchase and user management. Built as part of a DBMS project.",
      tools: ["JavaScript", "Oracle SQL", "HTML", "CSS", "Node.js", "React", "Express"],
      image: lmsImage,
    },
  ];

  return (
    <section id="projects" className="projects-section" aria-label="Projects">
      <div className="projects-header">
        <div className="projects-divider"></div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider"></div>
      </div>

      <p className="projects-description">
        I build solutions that are both functional and impactful. These projects showcase my interest in machine learning, computer vision, and AI.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  <FaGithub size={30} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
