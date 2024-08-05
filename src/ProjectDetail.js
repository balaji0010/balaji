import React from 'react';
import './ProjectDetail.css'; // Create this file for styling

const ProjectDetail = ({ project, onClose }) => {
    return (
        <div className="project-detail-overlay" onClick={onClose}>
            <div className="project-detail-container" onClick={(e) => e.stopPropagation()}>
                <div className="project-detail-header">
                    <h2>{project.name}</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="project-detail-content">
                    <p>{project.details}</p>
                    <div className="project-detail-info">
                        <div className="project-info-category">
                            <h4>Category</h4>
                            <p>{project.category}</p>
                        </div>
                        <div className="project-info-internship">
                            <h4>Internship</h4>
                            <p>{project.internship}</p>
                        </div>
                        <div className="project-info-start-date">
                            <h4>Start Date</h4>
                            <p>{project.startDate}</p>
                        </div>
                        <div className="project-info-designer">
                            <h4>Designer</h4>
                            <p>{project.designer}</p>
                        </div>
                    </div>
                    <div className="project-detail-skills">
                        {project.skills.map((skill, index) => (
                            <p key={index}>✓ {skill}</p>
                        ))}
                    </div>
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="behance-link"
                    >
                        View on Behance
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
