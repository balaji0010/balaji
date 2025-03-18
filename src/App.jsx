import React from "react";
import "./Portfolio.scss";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <Toggle />
      <section className="hero">
        <div className="highlighted-project"></div>
      </section>
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
