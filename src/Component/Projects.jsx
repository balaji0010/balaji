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
    images: ["./AUDI.png","/audi/audi1.png","/audi/audi2.png","/audi/bala.png","/audi/bala1.png","/audi/bala3.png",],
    description: "A redesign of the AUDI landing page featuring sleek animations and UI.",
    // behance: "https://www.behance.net/your-audi-project",
    // github: "https://github.com/your-audi-project",
    // linkedin: "https://linkedin.com/in/yourprofile"
  },
  { id: 2, images: ["./Whether.png","/whether/whether2.png"], image: ["./Whether.png", ], title: "Google Whether App " },
  { id: 3, images: ["./Zebronics.png", "/zeb/Neumorphism.png","/zeb/zeb2.png"], image: ["./Zebronics.png"],title: "Zebronics Product Redesign" },
  { id: 4, images: ["./PUBG.png", "/pub/pubsks.png","/pub/pubm16a4.png","/pub/pubm416.png"],image: ["./PUBG.png"], title: "Pubg Army" },
  { id: 5, images: ["./eco.png", "/ecom/eco1.png","/ecom/eco2.png"],image: ["./eco.png"], title: "Minimal Ecom Website" },
  { id: 6, images: ["./chik.png","/chik/chik1.png","/chik/chik2.png","/chik/chik3.png"],image: ["./chik.png"], title: "Chicken Platter" },
  { id: 7, images: ["./BB.png","./net.png"],image: ["./BB.png"], title: "Flight Ticket Booking" },
  { id: 8, images: ["./Asus1.png","./net.png"],image: ["./Asus1.png"], title: "Asus ROG " },
  { id: 9, images: ["./net.png","./PUBG.png"],image: ["./net.png"], title: "Netflix Redesign" },

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
