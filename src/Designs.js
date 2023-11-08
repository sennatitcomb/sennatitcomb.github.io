import React from 'react';
import './index.css';

function Designs() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/photos">Photography</a></li>
          </ul>
        </nav>
      </header>

      <section id="designs" className="section">
        <div className="container">
          <h2>Design Projects</h2>
          <p>Explore my Graphic Design Gallery</p>
          <div className="design-projects">
            <div className="project">
              <img src="design1.png" alt="Design 1" />
              <h4>Logo Design</h4>
            </div>
            <div className="project">
              <img src="design2.png" alt="Design 2" id="larger-image"/>
              <h4>Creative Poster of Living Space</h4>
            </div>
            <div className="project">
              <img src="design3.png" alt="Design 3" />
              <h4>Creative Application of Adobe Photoshop for Billboard Advertisement</h4>
            </div>
            <div className="project">
              <img src="design4.png" alt="Design 4" />
              <h4>Collaboration Design with Outside-In Poetry Submission</h4>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Designs;
