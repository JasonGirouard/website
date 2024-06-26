// Work.js
import React, { useState } from 'react';
import Project from './Project';
import CaseStudy from './CaseStudy';
import './Work.css';
import '../App.css';
import faceColorImage from '../images/face_color.jpg';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Revamping Themes at ReviewTrackers",
      subtitle: "B2B / DESKTOP / ENTERPRISE",
      description: "Discover how ReviewTrackers revamped its customization feature to meet diverse branding needs, boosting user engagement and enhancing product value.",
      image: faceColorImage,
      caseStudy: {
        discovery: "...",
        ideation: "...",
        // ... other case study sections
      }
    },

    {
      id: 2,
      title: "Revamping freight at Uber freight",
      subtitle: "B2B2C / STRATEGY/ WHATEVER ",
      description: "Discover how ReviewTrackers revamped its customization feature to meet diverse branding needs, boosting user engagement and enhancing product value.",
      image: faceColorImage,
      caseStudy: {
        discovery: "...",
        ideation: "...",
        // ... other case study sections
      }
    },
    // ... other projects
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };


  return (
    <div className="work">
      <h2>Work</h2>
      <Project 
          
        />

      {/* {projects.map(project => (
        <Project 
          key={project.id}
          {...project}
          onOpenProject={() => handleOpenProject(project)}
        />
      ))} */}
      {/* {selectedProject && (
        <CaseStudy 
          project={selectedProject}
          onClose={handleCloseProject}
        />
      )} */}
    </div>
  );
};

export default Work;