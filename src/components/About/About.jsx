import './About.css';
import React from 'react';
import davidPic from '../../images/david_pic.jpeg';
import boulderingIcon from '../../icons/climbing-1528278-1291475-3378983757.png';

const About = () => {
  return (
    <section className="myintro" id="intro">
      <div className="content">
        <div className="title"><span>My intro</span></div>
        <div className="left">
          <img src={davidPic} alt="" width="50" height="200px" className="david-pic" />
        </div>
        <div className="right">
          <div className="topic">About Me</div>
          <p>
            Innovative and goal-focused professional. I am studying to become a
            full-stack web developer, after having worked in completely
            different fields for a few years. High multicultural skills,
            passionate about new technologies and immense willingness to go deep
            into the Web Development world.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <i className="fa-regular fa-user fa-sm" style={{color: "green"}}></i>
                </td>
                <th>Name</th>
                <td>David González García</td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa-solid fa-phone-flip fa-sm"
                    style={{color: "green"}}
                  ></i>
                </td>
                <th>Phone</th>
                <td>+34665035127</td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa-regular fa-envelope fa-sm"
                    style={{color: "green"}}
                  ></i>
                </td>
                <th>Email</th>
                <td>davidgonzalez@gmx.com</td>
              </tr>
            </tbody>
          </table>
          <div className="interests">
            <h4>My Interests</h4>
            <div className="icons">
              <p><i className="fas fa-film" style={{color: "green"}}></i>Cinema</p>
              <p>
                <i
                  className="fa-solid fa-apple-whole fa fa-lg"
                  style={{color: "green"}}
                ></i>
                Nutrition
              </p>
              <p><i className="fas fa-dumbbell" style={{color: "green"}}></i>Fitness</p>
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

export default About;