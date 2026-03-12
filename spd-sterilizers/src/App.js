import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Gallery from './components/Gallery';
import Dryheat from './components/topics/Dryheat';
import Eo from './components/topics/Eo';
import './App.css';

const App = () => (
  <div className="app-css">
    <NavBar />
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;