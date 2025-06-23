import React from "react";
import './Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      {/* Animated Wave Background */}
      <div className="wave-wrapper">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Bubbles */}
      <div className="footer-bubble-layer">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`footer-bubble bubble-${i}`}></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <h2 className="footer-brand">Mannat Garg</h2>

        <nav className="footer-links">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="footer-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/mannat-garg-20258a324" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mannat-07" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </a>
        </div>

        <p className="footer-copyright">
          © 2025 Mannat Garg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
