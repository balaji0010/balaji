import React, { useState } from 'react';
import './Projects.css';
import ProjectDetail from './ProjectDetail'; // Import the ProjectDetail component

const projectsData = [
    {
        id: 1,
        name: 'AUDI Car Website',
        description: '"The Website about the Audi Car website which showcase the cars."',
        details: '"The Website about the Audi Car website which showcase the cars."',
        link: 'https://www.behance.net/gallery/204690067/Car-website',
        category: 'UI/UX Designing',
        internship: 'Selfly',
        finishedDate: 'Aug 01 ,2024',
        designer: 'BALAJI P',
        skills: [
            'UI : Figma, Adobe Illustrator, Prototyping',
        ]
    },
    {
        id: 2,
        name: 'Hotel Booking App',
        description: '"Its an Hotel Booking App which in search Hotel Bookings"',
        details: '"Its an Hotel Booking App which in search Hotel Bookings"',
        link: 'https://www.behance.net/gallery/204470039/Hotel-Booking-APP',
        category: 'UI/UX Designing',
        internship: 'Selfly',
        finishedDate: 'July 31, 2024',
        designer: 'BALAJI P ',
        skills: [
            'UI UX : Figma, Prototyping',
        ]
    },
    {
        id: 3,
        name: 'E-Commerce ',
        description: '"Landing Page of E-commerce website and Dashboard"',
        details: '"Landing Page of E-commerce website and Dashboard"',
        link: 'https://www.behance.net/gallery/203950993/Ecommerce-Digital-currency',
        category: 'UI /UX Designing',
        internship: 'Selfly',
        finishedDate: 'July 29, 2024',
        designer: 'BALAJI P ',
        skills: [
            'UI/UX : Figma, Adobe Illustrator, Prototyping',
        ]
    },
    {
        id: 4,
        name: 'Education Website',
        description: '"Education Website for Govt"',
        details: '"Its a Clone website design of Govt"',
        link: 'https://www.behance.net/gallery/203798429/Education-website',
        category: 'UI/UX Designing',
        internship: 'Selfly',
        finishedDate: 'July 20, 2024',
        designer: 'BALAJI P ',
        skills: [
            'UI/UX : Figma, Adobe Illustrator, Prototyping',
        ]
    },
    {
        id: 5,
        name: 'HealthCare UI',
        description: '"Its a UI for HealthCare App"',
        details: 'User Interface for Healthcare',
        link: 'https://www.behance.net/gallery/201569449/Healthcare-UI-Design',
        category: 'UI/UX Designing',
        internship: 'Selfly',
        finishedDate: 'July 10, 2024',
        designer: 'BALAJI P',
        skills: [
            'UI/UX : Figma, Adobe Illustrator, Prototyping',
        ]
    },
    {
        id: 6,
        name: 'ChatGpt2.o',
        description: 'Re-Design of ChatGpt2.o',
        details: 'Re-Design of ChatGpt2.o',
        link: 'https://www.behance.net/gallery/201823891/Chatgpt2o',
        category: 'Web Development',
        internship: 'Selfly',
        finishedDate: 'May 25, 2024',
        designer: 'Designer Name',
        skills: [
            'UI : Figma, Adobe Illustrator',
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
