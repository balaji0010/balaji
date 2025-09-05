import React from 'react';
import './component.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className='button-container'>
        <button className="back-button" onClick={onClose}>×</button>
        </div>
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* <div className="links">
            <a href={project.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={project.behance} target="_blank" rel="noreferrer">Behance</a>
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          </div> */}
        </div>
        <div className="image-container">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`Project ${idx + 1}`} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default ProjectModal;
