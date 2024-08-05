// src/Projects.js

import React from 'react';
import './Projects.css';

const projectsData = [
    { id: 1, name: 'Project 1', description: 'Description of project 1', detailsLink: '/project1-details' },
    { id: 2, name: 'Project 2', description: 'Description of project 2', detailsLink: '/project2-details' },
    // Add more projects as needed
];

const Projects = ({ isVisible, onClose }) => {
    return (
        <div className={`projects-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className="projects-container" onClick={(e) => e.stopPropagation()}>
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <button className="view-button" onClick={() => window.open(project.detailsLink, '_blank')}>
                                View
                            </button>
                        </div>
                    ))}
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Projects;
