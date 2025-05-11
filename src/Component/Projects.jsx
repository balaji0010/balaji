import React from "react";
import ProjectCard from "./Projectcard";
import ProjectModal from "./ProjectModal";
import './component.css';


// Dummy images (Replace with actual image URLs or import images)
const projectData = [
  {
    id: 1,
    title: "AUDI Car Website",
    image: "./AUDI.png",
    images: ["./AUDI.png"],
    description: "A redesign of the AUDI landing page featuring sleek animations and UI.",
    behance: "https://www.behance.net/your-audi-project",
    github: "https://github.com/your-audi-project",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  { id: 2, images: ["./Whether.png"], image: "./Whether.png", title: "Google Whether App " },
  { id: 3, images: ["./Zebronics.png"], image: ["./Zebronics.png"],title: "Zebronics Product Redesign" },
  { id: 4, images: ["./PUBG.png"],image: ["./PUBG.png"], title: "Pubg Army" },
  { id: 5, images: ["./eco.png"],image: ["./eco.png"], title: "Minimal Ecom Website" },
  { id: 6, images: ["./Vedit.png"],image: ["./Vedit.png"], title: "GlassMorphism Portfolio Design" },
  { id: 7, images: ["./BB.png"],image: ["./BB.png"], title: "Flight Ticket Booking" },
  { id: 8, images: ["./Asus1.png"],image: ["./Asus1.png"], title: "Asus ROG " },
  { id: 9, images: ["./net.png"],image: ["./net.png"], title: "Netflix Redesign" },

];

const Projects = () => {

  const [selectedProject, setSelectedProject] = React.useState(null);
  return (
    <section className="projects">
      {projectData.map((project) => (
        <ProjectCard key={project.id} 
        image={project.image} 
        title={project.title}
        onClick={()=>setSelectedProject(project) } />  
      ))}
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
