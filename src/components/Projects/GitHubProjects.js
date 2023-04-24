import React, { useState, useEffect } from "react";
import "./GitHubProjects.css";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch(
      "https://api.github.com/users/David-Gonzalez-Garcia/repos"
    );
    const data = await response.json();
    if (Array.isArray(data)) {
      setProjects(data);
    } else {
      console.error("Error fetching GitHub projects:", data);
    }
  };

  return (
    <div>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name}</h3>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
