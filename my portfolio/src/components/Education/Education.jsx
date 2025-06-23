import React from "react";
import './Education.css'
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="education-section py-24 px-[10vw] relative overflow-hidden bg-gradient-to-b from-[#0b1320] to-[#142132]"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-underline" />
        <p className="education-subtitle">
          A timeline of my academic voyage flowing through years of learning and discovery.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="education-timeline">
        <div className="education-line" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`edu-card-container ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="edu-card group">
              <div className="edu-bubble-glow" />
              <div className="edu-card-top flex items-center gap-4">
                <div className="edu-img">
                  <img src={edu.img} alt={edu.school} />
                </div>
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-school">{edu.school}</p>
                </div>
              </div>
              <p className="edu-desc">{edu.desc}</p>
              <p className="edu-date">{edu.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
