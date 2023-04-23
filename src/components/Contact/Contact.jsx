import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section class="contact" id="contact">
    <div class="content">
      <div class="title"><span>Contact Me</span></div>
      <div class="text">
        <div class="topic">Have Any Project?</div>
        <p>
          I am currently looking for an internship opportunity, since my
          course cover a two-months long internship to complete it.
        </p>
        <div class="button">
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