import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './About';
import Designs from './Designs';
import Photos from './Photos';
import Weather from './Weather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<About />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
