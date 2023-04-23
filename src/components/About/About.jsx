import './About.css';
import React from 'react'
import davidPic from '../../images/david_pic.jpeg'
import boulderingIcon from '../../icons/climbing-1528278-1291475-3378983757.png'

const About = () => {
  return (
    <section class="myintro" id="intro">
      <div class="content">
        <div class="title"><span>My intro</span></div>
        <div class="left">
          <img src={davidPic} alt="" width="50" height="200px" />
        </div>
        <div class="right">
          <div class="topic">About Me</div>
          <p>
            Innovative and goal-focused professional. I am studying to become a
            full-stack web developer, after having worked in completely
            different fields for a few years. High multicultural skills,
            passionate about new technologies and immense willingness to go deep
            into the Web Development world.
          </p>
          <table>
            <tr>
              <td>
                <i class="fa-regular fa-user fa-sm" style={{color: "green"}}></i>
              </td>
              <th>Name</th>
              <td>David González García</td>
            </tr>
            <tr>
              <td>
                <i
                  class="fa-solid fa-phone-flip fa-sm"
                  style={{color: "green"}}
                ></i>
              </td>
              <th>Phone</th>
              <td>+34665035127</td>
            </tr>
            <tr>
              <td>
                <i
                  class="fa-regular fa-envelope fa-sm"
                  style={{color: "green"}}
                ></i>
              </td>
              <th>Email</th>
              <td>davidgonzalez@gmx.com</td>
            </tr>
          </table>
          <div class="interests">
            <h4>My Interests</h4>
            <div class="icons">
              <p><i class="fas fa-film" style={{color: "green"}}></i>Cinema</p>
              <p>
                <i
                  class="fa-solid fa-apple-whole fa fa-lg"
                  style={{color: "green"}}
                ></i>
                Nutrition
              </p>
              <p><i class="fas fa-dumbbell" style={{color: "green"}}></i>Fitness</p>
              <p>
                <img
                  src={boulderingIcon}
                  width="40em"
                  height="40em"
                  alt=""
                  style={{marginRight: "10px"}}
                />Bouldering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About