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

  // const renderSectionWithImage = (title, content, image) => (
  //   <div className="section-with-image">
  //     <div className="section-content">
  //       <h5>{title}</h5>
  //       <p>{content}</p>
  //     </div>
  //     {image && (
  //       <div className="section-image">
  //         <img src={image} alt={title} />
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}></div>
      <div className={`case-study-panel ${isOpen ? 'open' : ''}`}>
        <button onClick={handleClose} className="close-button">&times;</button>
        <div className="case-study-content">
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>
          <p>{project.description}</p>
          {project.content}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;