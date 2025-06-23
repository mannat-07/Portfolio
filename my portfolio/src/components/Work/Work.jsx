import React, { useState } from "react";
import './Work.css'
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="work" className="relative" style={{ position: "relative" }}>
      {/* Bubble Background */}
      <div className="bubble-background">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>

      <div className="work-container py-24 px-[10vw] relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="work-heading">PROJECTS</h2>
          <div className="work-underline" />
          <p className="work-subtext">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>

        {/* Grid */}
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleOpenModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div>
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay">
            <div className="modal-box">
              <button onClick={handleCloseModal} className="modal-close">
                &times;
              </button>
              <div className="flex flex-col gap-4 p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl shadow-2xl"
                />
                <h3 className="text-white text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-gray-400">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-code w-1/2 text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-live w-1/2 text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
