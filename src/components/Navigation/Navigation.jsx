import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsActive(true);
  };

  const handleCancelClick = () => {
    setIsActive(false);
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <div className={`navbar ${isActive ? 'active' : ''}`}>
        <div className="logo">
          <a href="http://www.davidglez.eu/">davidglez.eu</a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" onClick={handleNavLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#intro" onClick={handleNavLinkClick}>
              Intro
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavLinkClick}>
              Contact
            </a>
          </li>
          <div className="cancel-btn" onClick={handleCancelClick}>
            <i className="fas fa-times" aria-hidden="true"></i>
          </div>
        </ul>
        <div className="media-icons">
          <a href="https://www.linkedin.com/in/davidglezg/">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/David-Gonzalez-Garcia">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
        
      </div>
      <div
        className="menu-btn"
        style={{ opacity: isActive ? '0' : '1', pointerEvents: isActive ? 'none' : 'auto' }}
        onClick={handleMenuClick}
      >
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navigation;