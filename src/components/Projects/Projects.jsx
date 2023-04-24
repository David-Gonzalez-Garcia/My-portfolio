import React from 'react';
import './Projects.css';
import ProjectsImage from '../../icons/report-document-icon-vector-18383013.jpg';
import GitHubProjects from './GitHubProjects';

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="content">
          <div className="title">
            <span>Projects</span>
          </div>
          <div className='projects-and-examples'>
            <div className="github-projects">
              <h2>My GitHub Projects</h2>
              <GitHubProjects />
            </div>
            <div className="examples">
              
              <img
                src={ProjectsImage}
                width="100px"
                alt=""
                style={{ animation: 'jump 1.5s step-end infinite' }}
              />
              <p>More coming soon!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <form action=""></form>
      </section>
    </>
  );
};

export default Projects;
