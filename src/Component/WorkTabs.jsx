import React from "react";
import "./component.css";


const WorkTabs = ({activeWorkTab, setActiveWorkTab}) => {
     return (
    <div className="work-tabs">
      <button
        className={activeWorkTab === "projects" ? "active" : ""}
        onClick={() => setActiveWorkTab("projects")}
      >
        Projects
      </button>
      <button
        className={activeWorkTab === "photography" ? "active" : ""}
        onClick={() => setActiveWorkTab("photography")}
      >
        Photography
      </button>
    </div>
  );
};

export default WorkTabs;
