import React from "react";
import './component.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">     
        <h2>BALAJI PALANISAMY</h2>
        <span>UI/UX Designer | Frontend Developer</span>
      </div>
      <div className="links">
        <a href= "https://github.com/balaji0010" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/balaji-p0001/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="BALAJI_P_RESUME01.pdf" download="BALAJI_P_RESUME01.pdf">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
