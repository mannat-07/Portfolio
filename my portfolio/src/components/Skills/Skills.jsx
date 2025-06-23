// src/components/Skills/Skills.jsx
import React from "react";
import './Skills.css'
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section id="skills" className="skills-section">
    {/* Title */}
    <div className="skills-header">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-underline"></div>
      <p className="skills-subtitle">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="skills-grid">
      {SkillsInfo.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="category-title">{category.title}</h3>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={1200}>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img src={skill.logo} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
