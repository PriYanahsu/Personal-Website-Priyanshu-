import React from "react";
import "./Projects.css";

// Example Project Data
const projects = [
  {
    title: "Ecoder",
    description: "A website development tool for creating and managing websites with ease.",
    image: "path_to_ecoder_image.jpg", // Add the actual image path
    link: "https://ecoder.com" // Add link to project if available
  },
  {
    title: "INNFOODIE",
    description: "A React-based food-ordering platform with a dynamic menu and order tracking.",
    image: "path_to_innfoodie_image.jpg", // Add the actual image path
    link: "https://innfoodie.com" // Add link to project if available
  },
  {
    title: "Disease Detection and Drug Recommendation",
    description: "A Machine Learning project to detect diseases and recommend appropriate drugs.",
    image: "path_to_disease_detection_image.jpg", // Add the actual image path
    link: "https://diseasedetection.com" // Add link to project if available
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
