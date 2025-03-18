import React from "react";
import ProjectCard from "./Projectcard";
import './component.css';


// Dummy images (Replace with actual image URLs or import images)
const projectData = [
  { id: 1, image: "./AUDI.png", title: "AUDI Car Website" },
  { id: 2, image: "./Whether.png", title: "Google Whether App " },
  { id: 3, image: "./Zebronics.png", title: "Zebronics Product Redesign" },
  { id: 4, image: "./PUBG.png", title: "Pubg Army" },
  { id: 5, image: "./eco.png", title: "Minimal Ecom Website" },
  { id: 6, image: "./Vedit.png", title: "GlassMorphism Portfolio Design" },
  { id: 7, image: "./BB.png", title: "Flight Ticket Booking" },
  { id: 8, image: "./Asus1.png", title: "Asus ROG " },
  { id: 9, image: "./net.png", title: "Netflix Redesign" },

];

const Projects = () => {
  return (
    <section className="projects">
      {projectData.map((project) => (
        <ProjectCard key={project.id} image={project.image} title={project.title} />
      ))}

      <br>
      </br>
    </section>
  );
};

export default Projects;
