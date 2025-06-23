import React, { useState, useEffect } from "react";
import './Navbar.css'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`navbar-wrapper ${
        isScrolled ? "navbar-scrolled" : "navbar-default"
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="name red">M</span>
          <span className="name purple">G</span>
        </div>


        {/* Desktop Menu */}
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-link ${
                activeSection === item.id ? "menu-active" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/mannat-07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/mannat-garg-20258a324"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle md:hidden">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mobile-link ${
                  activeSection === item.id ? "menu-active" : ""
                }`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
            <div className="mobile-socials">
              <a
                href="https://github.com/mannat-07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/mannat-garg-20258a324"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
