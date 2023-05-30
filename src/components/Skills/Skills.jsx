import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills" id="skills">
    <div className="content">
      <div className="title"><span>My Skills</span></div>
      <div className="boxes">
        <div className="box">
          <div className="topic">HTML</div>
          <div className="per">90%</div>
        </div>
        <div className="box">
          <div className="topic">CSS</div>
          <div className="per">80%</div>
        </div>
        <div className="box">
          <div className="topic">JavaScript</div>
          <div className="per">70%</div>
        </div>
        <div className="box">
          <div className="topic">React.js</div>
          <div className="per">70%</div>
        </div>
        <div className="box">
          <div className="topic">Node.js</div>
          <div className="per">60%</div>
        </div>
        <div className="box">
          <div className="topic">Express.js</div>
          <div className="per">60%</div>
        </div>
        <div className="box">
          <div className="topic">Bootstrap</div>
          <div className="per">60%</div>
        </div>
        <div className="box">
          <div className="topic">SASS</div>
          <div className="per">60%</div>
        </div>
        <div className="box">
          <div className="topic">MongoDB</div>
          <div className="per">40%</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills