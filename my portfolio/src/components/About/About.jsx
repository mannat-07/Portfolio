import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* Text Block */}
        <div className="about-content">
          <h1 className="about-title">Hey, I'm</h1>
          <h2 className="about-name">Mannat Garg</h2>
          <h3 className="about-role">
            <span className="role-prefix">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Code Ninja',
                'Frontend Wizard',
                'UI/UX Alchemist',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="cursor-highlight">{cursor}</span>
              )}
            />
          </h3>
          <p className="about-bio">
            I’m a full-stack developer and CS student, skilled in both front-end and back-end. I work mainly with the MERN stack to craft smooth, responsive, and scalable digital experiences.
          </p>
          <a
            href="/Mannat_Resume.pdf" download="Mannat_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Download CV
          </a>
        </div>

        {/* Profile Image with Bubble Blast */}
        <div className="about-img-container group">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={800}>
            <div className="bubble-blast-wrapper group-hover:animate-blast">
              <div className="blast-bubble"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`water-drop drop-${i + 1}`}></div>
              ))}
              <img src={profileImage} alt="Mannat Garg" className="profile-img" />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
