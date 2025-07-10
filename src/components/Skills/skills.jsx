import React from "react";
import English from "../../assets/english.png";
import CriticalThinking from "../../assets/critical-thinking.png";
import ProblemSolving from "../../assets/problem-solving.png";
import Teamwork from "../../assets/teamwork.png";
import TimeManagement from "../../assets/time-management.png";
import urduImage from "../../assets/urdu.PNG";

import {
  FaReact,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaCuttlefish,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaAws,
  FaLaravel,
} from "react-icons/fa";

import {
  SiKotlin,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiAndroidstudio,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { RiTailwindCssFill, RiFirebaseFill, RiVercelFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import "./skills.css";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython size={40} /> },
        { name: "C#", icon: <FaCuttlefish size={40} /> },
        { name: "C++", icon: <FaCuttlefish size={40} /> },
      ],
    },
        {
      category: "Python Libraries & Tools",
      items: [
        { name: "Pandas", icon: <span>📊</span> },
        { name: "NumPy", icon: <span>🔢</span> },
        { name: "Matplotlib", icon: <span>📈</span> },
        { name: "Seaborn", icon: <span>🌈</span> },
        { name: "Scikit-learn", icon: <span>🤖</span> }
      ],
    },
    {
      category: "Technologies",
      items: [
        { name: "Visual Studio Code", icon: <VscVscode size={40} /> },
        { name: "GitHub", icon: <FaGithub size={40} /> },
        { name: "Git", icon: <FaGitAlt size={40} /> },
        { name: "Postman", icon: <SiPostman size={40} /> }
      ],
    },
    {
      category: "Database Management",
      items: [
        { name: "MySQL", icon: <SiMysql size={40} /> },
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
      ],
    },
    {
      category: "Language Skills",
      items: [
        {
          name: "English",
          icon: (
            <img
              src={English}
              alt="English"
              style={{ width: 40, height: 40 }}
            />
          ),
        },
        {
          name: "Urdu",
          icon: (
            <img src={urduImage} alt="Urdu" style={{ width: 40, height: 40 }} />
          ),
        },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          name: "Critical Thinking",
          icon: (
            <img
              src={CriticalThinking}
              alt="Critical Thinking"
              style={{ width: 40, height: 40 }}
            />
          ),
        },
        {
          name: "Problem Solving",
          icon: (
            <img
              src={ProblemSolving}
              alt="Problem Solving"
              style={{ width: 40, height: 40 }}
            />
          ),
        },
        {
          name: "Teamwork",
          icon: (
            <img
              src={Teamwork}
              alt="Teamwork"
              style={{ width: 40, height: 40 }}
            />
          ),
        },
        {
          name: "Time Management",
          icon: (
            <img
              src={TimeManagement}
              alt="Time Management"
              style={{ width: 40, height: 40 }}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-header">
        <div className="skills-divider"></div>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-divider"></div>
      </div>

      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
