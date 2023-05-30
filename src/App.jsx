import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton.jsx';

function App() {

  
  const isDarkModeSupported = window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all';
const [isDarkMode, setIsDarkMode] = useState(isDarkModeSupported && window.matchMedia('(prefers-color-scheme: dark)').matches);

useEffect(() => {
  if (isDarkModeSupported) {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }
}, [isDarkMode, isDarkModeSupported]);

  useEffect(() => {
    // Detecta si el dispositivo está en modo oscuro
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log("Is dark mode detected: ", window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  
  useEffect(() => {
    // Agrega o elimina la clase CSS dependiendo del estado de isDarkMode
    console.log('Adding or removing class...');
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <Navigation />
      <ScrollButton />
      
      <Routes>
        <Route path="/" exact element={<div><Home /><About/><Skills/><Projects/><Contact/></div>} />
        <Route path="/intro" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
