// src/Skills.js

import React from 'react';
import './Skills.css';

const skillsData = [
    { id: 1, name: 'Figma', image: 'figma.png' },
    { id: 2, name: 'Adobe Photoshop', image: '/photoshop.png' },
    { id: 3, name: 'Adobe Illustrator', image: '/illustrator.png' },
    { id: 4, name: 'Adobe XD', image: '/xd.png' },
    { id: 5, name: 'HTML', image: '/html.png' },
    { id: 6, name: 'JavaScript', image: '/js.png' },
    { id: 7, name: 'ReactJS', image: '/reactjs.png' },
    { id: 8, name: 'CSS', image: '/css.png'},
];

const Skills = ({ isVisible, onClose }) => {
    return (
        <div className={`skills-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className="skills-container" onClick={(e) => e.stopPropagation()}>
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skillsData.map(skill => (
                        <div key={skill.id} className="skill-card">
                            <img src={skill.image} alt={skill.name} />
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Skills;
