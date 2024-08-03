// src/Header.js

import React from 'react';
import './Header.css';

const Header = ({ onContactClick }) => {
    return (
        <header className="header">
            <div className="logo">BALAJI P</div>
            <nav className="navigation">
                <ul>
                    <li><a href="/BALAJI_P_RESUME01.pdf" download="BALAJI_P_RESUME01.pdf">Resume</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact" onClick={onContactClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
