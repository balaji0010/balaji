import React from "react";
import './component.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">     
        <h2>BALAJI P</h2>
        <span>UI/UX Designer | Frontend Developer</span>
      </div>
      <div className="links">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/resume.pdf" download>Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
