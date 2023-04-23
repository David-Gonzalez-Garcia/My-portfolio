import React from 'react';
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
