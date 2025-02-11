import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { useEffect } from "react";
const Projects = () => {
  const API_URL = "http://localhost:1337/api/";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(API_URL + "projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.data);
      })
      .catch((error) => console.error("Erreur de fetch :", error));
  }, []);

  return (
    <>
      <h1> Projets </h1>
      <div className="cardsContainer">
        {
          projects.map((proj, index) => (
          <ProjectCard key={index} title={proj.title} description={proj.description} slug={proj.slug} />
          ))}
      </div>
    </>
  );
};
export default Projects;
