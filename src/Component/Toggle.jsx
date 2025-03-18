import React, { useState } from "react";
import './component.css';

const Toggle = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState("work");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSection(tab); // Update the section in the parent component
  };

  return (
    <div className="toggle">
        <button>
      <button
        className={activeTab === "work" ? "active" : ""}
        onClick={() => handleTabClick("work")}
      >
        Work
      </button>
      <button
        className={activeTab === "info" ? "active" : ""}
        onClick={() => handleTabClick("info")}
      >
        Info
      </button>
      </button>
    </div>
  );
};

export default Toggle;
