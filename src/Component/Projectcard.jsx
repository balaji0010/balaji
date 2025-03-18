import React from "react";
import './component.css';

const ProjectCard = ({ image, title }) => {
  return (
    
    <div className="pro-card-container">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <br></br>
    </div>
  );
};

export default ProjectCard;
