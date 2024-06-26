// CaseStudy.js
import React, { useEffect, useState } from 'react';
import './CaseStudy.css';

const CaseStudy = ({ project, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}></div>
      <div className={`case-study-panel ${isOpen ? 'open' : ''}`}>
        <button onClick={handleClose} className="close-button">&times;</button>
        <div className="case-study-content">
          {isLoading && <div className="loading-indicator">Loading...</div>}
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTI8BjKNiVJH_zKb7LlHkNly6PZpc5mq0ORi0_WV37sWKlW269m2en74l_9jaOuxlXAxPWVKNIKHyM1/pub?embedded=true"
            title={project.title}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          >
            <p>Your browser doesn't support iframes. You can view the case study <a href={project.googleDocUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
          </iframe>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;

// Projects.js (update the projects array)
const projects = [
  {
    id: 1,
    title: "Empowering Uber Freight's Operators",
    subtitle: "Timeline: Sept 2021 - Nov 2022",
    description: "I led product development to empower our Uber Freight operations team to deliver high-quality service. This work included product discovery, codesigning the solution with industry experts, and iterative development.",
    image: "/path-to-uber-freight-image.jpg",
    googleDocUrl: "https://docs.google.com/document/d/e/2PACX-1vTI8BjKNiVJH_zKb7LlHkNly6PZpc5mq0ORi0_WV37sWKlW269m2en74l_9jaOuxlXAxPWVKNIKHyM1/pub?embedded=true"
  },
  // ... other projects
];