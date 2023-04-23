import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <section class="skills" id="skills">
    <div class="content">
      <div class="title"><span>My Skills</span></div>
      <div class="boxes">
        <div class="box">
          <div class="topic">HTML</div>
          <div class="per">90%</div>
        </div>
        <div class="box">
          <div class="topic">CSS</div>
          <div class="per">80%</div>
        </div>
        <div class="box">
          <div class="topic">JavaScript</div>
          <div class="per">70%</div>
        </div>
        <div class="box">
          <div class="topic">React.js</div>
          <div class="per">60%</div>
        </div>
        <div class="box">
          <div class="topic">Node.js</div>
          <div class="per">60%</div>
        </div>
        <div class="box">
          <div class="topic">Express.js</div>
          <div class="per">60%</div>
        </div>
        <div class="box">
          <div class="topic">Bootstrap</div>
          <div class="per">60%</div>
        </div>
        <div class="box">
          <div class="topic">SASS</div>
          <div class="per">60%</div>
        </div>
        <div class="box">
          <div class="topic">MongoDB</div>
          <div class="per">40%</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills