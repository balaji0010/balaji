import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from './Component/Navbar';
import Toggle from './Component/Toggle';


const App= () =>  {

  const [activeSection, setActiveSection] = useState("work");

  return (
    <div className="App">
      <Navbar/>
      <Toggle setActiveSection={setActiveSection} />

      {activeSection === "work" ? (
        <section className="hero">
          <div className="highlighted-project"></div>
        <Navbar/>
        </section>
      ) : (
        <section className="info">
          
          <h2>About Me</h2>
          <p>Hi, I'm Balaji P, a UI/UX Designer and Frontend Developer...</p>
        </section>
      )}
    </div>
  );
}

export default App;
