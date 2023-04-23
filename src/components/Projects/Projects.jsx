import React from 'react'
import "./Projects.css"
import ProjectsImage from '../../icons/report-document-icon-vector-18383013.jpg'

const Projects = () => {
  return (
    <>
    <section class="projects" id="projects">
      <div class="content">
        <div class="title"><span>Projects</span></div>
        <div class="examples">
          <img
            src={ProjectsImage}
            width="100px"
            alt=""
            style={{animation: "jump 1.5s step-end infinite"}}
          />
          <p>Coming soon!</p>
        </div>
      </div>
    </section>
    <section class="contact">
      <form action=""></form>
    </section>
    </>
  )
}

export default Projects