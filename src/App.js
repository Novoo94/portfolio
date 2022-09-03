import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, } from "react-router-dom";

import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
// import { useState } from 'react'
import Home from './components/Home/Home';

function App() {

  return (


    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>


    </div>
  );
};

export default App;
