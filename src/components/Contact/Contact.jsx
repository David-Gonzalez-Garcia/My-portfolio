import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <div className="content">
      <div className="title"><span>Contact Me</span></div>
      <div className="text">
        <div className="topic">Have Any Project?</div>
        <p>
          I am currently looking for an internship opportunity, since it is part of my one year Web Development course and I am at the end of it.
        </p>
        <div className="button">
          <button>
            <a href="mailto:davidgonzalez@gmx.com">Let's chat</a>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact