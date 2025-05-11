import React, { useState } from "react";
import './App.css';
import Navbar from './Component/Navbar';
import Toggle from './Component/Toggle';
import Projects from './Component/Projects';
import Showcase from './Component/Showcase';
import Persona from './Component/Persona';
import About from './Component/About';


const App= () =>  {

  const [activeSection, setActiveSection] = useState("work");

  return (
    <div className="App">
      <Navbar/>
      <Toggle setActiveSection={setActiveSection} />

      
      {activeSection === "work" ? (
        <section className="hero">
          <div className="highlighted-project"></div>
          <Showcase/>
          <Projects/>
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
