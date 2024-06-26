// About.js
import React from 'react';
 import '../App.css';
import './About.css';
import AboutMeImage from '../images/torso_shot.png';


const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate product manager with a background in [Your Background]. 
            With [X] years of experience, I specialize in [Your Specialties].
          </p>
          <p>
            My approach combines user-centered design principles with data-driven 
            decision making to create products that truly resonate with users and 
            drive business growth.
          </p>
          <a href="https://www.linkedin.com/in/jasongirouard/" target="_blank" rel="noopener noreferrer" className="resume-link">
            View My Resume
          </a>
        </div>
        <div className="about-image">
          <img src={AboutMeImage} alt="Your Name" className="framed-image" />
        </div>
      </div>
    </div>
  );
};

export default About;