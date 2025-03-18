import React, { useState } from "react";
import './App.css';
import Navbar from './component/Navbar';
import Toggle from './component/Toggle';
import Projects from './component/Projects';
import Showcase from './component/Showcase';
import Persona from './component/Persona';
import About from './component/About';


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
