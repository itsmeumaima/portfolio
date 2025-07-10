import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "BSc in Software Engineering",
    institution: "NED University of Engineering and Technology",
    duration: "October 2023 – Present",
    cgpa: "3.8",
  },
  {
    id: 2,
    title: "College (Pre-Engineering)",
    grade: "A+",
    institution: "Metropolis Intermediate College",
    duration: "2021 – 2023"
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-title-container">
        <div className="education-divider"></div>
        <h2 className="education-title">Education</h2>
        <div className="education-divider"></div>
      </div>

      <div className="education-grid">
        {educations.map((education) => (
          <GlowCard key={education.id} identifier={`education-${education.id}`}>
            <div className="education-card">
              <div className="education-duration">{education.duration}</div>
              <div className="education-content">
                <div className="education-icon">
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <h3 className="education-degree">
                    {education.title}
                    {education.grade && (
                      <>
                        <br />
                        <span className="education-grade">Grade: {education.grade}</span>
                      </>
                    )}
                  </h3>
                  <p className="education-institution">{education.institution}</p>
                  {education.cgpa && !education.grade && (
                    <p className="education-grade">CGPA: {education.cgpa}</p>
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Education;