import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Move to up button */}
      <div className="scroll-button">
        <a href="#home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
      {/* Home Section Start */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hi, I am</div>
            <div className="text-two">David González</div>
            <div className="text-three">Web Developer</div>
            <div className="text-four">
              Student, learning to become a Fullstack Web Developer
            </div>
          </div>
          <div className="buttons">
            <button className="button1">
              <a href="./Download/Gonzalez, David, CV_Web_Developer.pdf">
                Download CV
              </a>
            </button>
            <button className="button2">
              <a href="mailto:davidgonzalez@gmx.com">Contact Me</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
