// CaseStudy.js (updated to handle inline images)
import React, { useEffect, useState } from 'react';
import './CaseStudy.css';
import faceColorImage from '../images/face_color.jpg';

const CaseStudy = ({ project, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <h1>{project.title}</h1>
          <p1>{project.timeline}</p1>
          <p>{project.description}</p>
          {project.content}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;