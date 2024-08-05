import React, { useState } from 'react';
import './Projects.css';
import ProjectDetail from './ProjectDetail'; // Import the ProjectDetail component

const projectsData = [
    {
        id: 1,
        name: 'Personalized Portfolio Website',
        description: 'Description of project 1',
        details: 'Full details of project 1',
        link: 'https://behance.net/project1',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'BALAJI P',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
        ]
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description of project 2',
        details: 'Full details of project 2',
        link: 'https://behance.net/project2',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'Designer Name',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
            'Backend: Node.js, Express',
            'Cloud services: Azure Static Web Apps, blob storage, Azure Entra ID',
            'DevOps: Docker',
            'CICD: GitHub Actions'
        ]
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description of project 3',
        details: 'Full details of project 3',
        link: 'https://behance.net/project3',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'Designer Name',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
            'Backend: Node.js, Express',
            'Cloud services: Azure Static Web Apps, blob storage, Azure Entra ID',
            'DevOps: Docker',
            'CICD: GitHub Actions'
        ]
    },
    {
        id: 4,
        name: 'Project 4',
        description: 'Description of project 4',
        details: 'Full details of project 4',
        link: 'https://behance.net/project4',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'Designer Name',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
            'Backend: Node.js, Express',
            'Cloud services: Azure Static Web Apps, blob storage, Azure Entra ID',
            'DevOps: Docker',
            'CICD: GitHub Actions'
        ]
    },
    {
        id: 5,
        name: 'Project 5',
        description: 'Description of project 5',
        details: 'Full details of project 5',
        link: 'https://behance.net/project5',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'Designer Name',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
            'Backend: Node.js, Express',
            'Cloud services: Azure Static Web Apps, blob storage, Azure Entra ID',
            'DevOps: Docker',
            'CICD: GitHub Actions'
        ]
    },
    {
        id: 6,
        name: 'Project 6',
        description: 'Description of project 6',
        details: 'Full details of project 6',
        link: 'https://behance.net/project6',
        category: 'Web Development',
        internship: 'Selfly',
        startDate: 'August 01, 2023',
        designer: 'Designer Name',
        skills: [
            'Frontend: HTML, CSS, JavaScript',
            'Backend: Node.js, Express',
            'Cloud services: Azure Static Web Apps, blob storage, Azure Entra ID',
            'DevOps: Docker',
            'CICD: GitHub Actions'
        ]
    }
    // Add more projects as needed
];

const Projects = ({ isVisible, onClose }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    return (
        <div className={`projects-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className="projects-container" onClick={(e) => e.stopPropagation()}>
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <button className="view-button" onClick={() => handleViewClick(project)}>
                                View
                            </button>
                        </div>
                    ))}
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
            {selectedProject && (
                <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
            )}
        </div>
    );
};

export default Projects;
