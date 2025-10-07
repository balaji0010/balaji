import React, { useState } from "react";
import './App.css';
import Navbar from './Component/Navbar';
import Toggle from './Component/Toggle';
import Projects from './Component/Projects';
import Showcase from './Component/Showcase';
import Persona from './Component/Persona';
import About from './Component/About';
import Photography from './Component/Photography';
import WorkTabs from './Component/WorkTabs';


const App= () =>  {

  const [activeSection, setActiveSection] = useState("work");
  const [activeWorkTab, setActiveWorkTab] = useState("projects");

  return (
    <div className="App">
      <Navbar/>
      <Toggle setActiveSection={setActiveSection} />

      
      {activeSection === "work" ? (
        <section className="hero">
          <div className="highlighted-project"></div>
          <Showcase/>
             <WorkTabs
            activeWorkTab={activeWorkTab}
            setActiveWorkTab={setActiveWorkTab}
          />
          {activeWorkTab === "projects" ? <Projects /> : <Photography />}
        </section>
      ) : (
        <section className="info">
          <Persona/>

          <About/>
        </section>
      )}
    </div>
  );
}

export default App;
