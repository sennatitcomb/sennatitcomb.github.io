// About.js
import React from 'react';
import './index.css';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function About() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
  return (
    <>
     <header>
        <nav>
        <ul>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><a href = "https://github.com/sennatitcomb" target="_blank" rel="noreferrer">Github</a>
             </li>
            <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ReactRouterLink to="/designs">Designs</ReactRouterLink></li>
            <li><ReactRouterLink to="/photos">Photography</ReactRouterLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
        </nav>
    </header>
    <section id="about" class="section about-container">
          <div class="container">
              <h1 class="name">Senna Titcomb</h1>
              <p> Developer | Designer | Leader | Problem Solver</p>
              <p>Determined and highly motivated computer science graduate and psychology minor. Proficient in design, completion, and production of technical products, versed in multiple programming languages as well as diverse software engineering domains.</p>
          </div>
      </section>
      <section id="skills" class="section">
              <div class="container">
                  <h2>Skills</h2>
                  <div class="skills-container">
                      <div class="skill-bubble" data-skill="Cloud Development">Cloud Development</div>
                      <div class="skill-bubble" data-skill="Human-Computer Interaction">Human-Computer Interaction</div>
                      <div class="skill-bubble" data-skill="UI Design">UI Design</div>
                      <div class="skill-bubble" data-skill="UX Design">UX Design</div>
                      <div class="skill-bubble" data-skill="Web Development">Web Development</div>
                      <div class="skill-bubble" data-skill="Project Management">Project Management</div>
                      <div class="skill-bubble" data-skill="Programming Languages">Programming Languages</div>
                      <div class="skill-bubble" data-skill="Software Development">Software Development</div>
                  </div>
              </div>
          </section>

        <div class="skill-popup">
            <span class="close-popup">&times;</span>
            {/* <h3></h3>
            <p></p> */}
        </div> 

        <section id="projects" class="section">
        <div class="container">
            <h2>Projects </h2>
            <ul>
                <li>
                    <a href=" https://sites.google.com/oregonstate.edu/otelplatform/home?authuser=0" style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer">OpenTelemetry Data Analysis Platform</a>
                </li>
                <p>In this project, I helped conceptualize and create a telemetry data visualization platform for Intel. This was a comprehensive SaaS observability solution designed to empower Intel engineers with real-time insights into their cloud-native workloads. From initialization to production, this project entailed architecting and developing a cutting-edge platform that revolutionized how telemetry data is harnessed and leveraged for Intel's benefit.
                </p>
                <li>
                    <p>Business Intelligence Project: From SQL Tables to Visual Analytics</p>
               </li>
               <p>
                Extraction of data from SQL databases and transforming into user-friendly dashboard for filtering, analysis, download, and reporting. Use of AWS, SQL, HTML/CSS/Javascript, Node.js, Python. For Intel internal use cases.
                </p>
                <li>
                    <a href="https://www.figma.com/proto/BWBJC3QOEItwG86KUrMKOn/WeRide?node-id=12-3&starting-point-node-id=12%3A3&scaling=scale-down" style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer">WeRide Transit Application</a>
                </li>
                <p>WeRide is a broad-use transit application that helps suggest the best mode of transportation in regards to price, time, convenience, and distance.
                </p>
                <li>
                    <p>Jaeger Trace Analysis</p>
               </li>
               <p>
                Created Jupyter Notebooks to generate insightful visualizations from JSON files containing Jaeger traces, all within the context of Docker containerization. For Intel internal use cases.  
                </p>
                <li>
                 <a href="https://github.com/sennatitcomb/FLOPPY_FISH_VIDEO_GAME" style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer">Floppy Fish Video Game</a>
               </li>
               <p>
                A website to host a video game I created using Node.js, HTML, CSS, and Javascript. Drawing inspiration from the iconic Flappy Bird, our game design incorporates the addictive simplicity and challenging gameplay that made Flappy Bird a phenomenon.
                </p>
            </ul>
        </div>
    </section>

    <section id="progress" class="section">
        <div class="container">
            <h2>In-Progress</h2>
            <ul class="progress-items">
                <li>
                    <p>Google Project Management Certificate: Currently in Completion</p>
                </li>

            </ul>
        </div>
    </section>
    <section id="recommendations" className="section">
        <div className="container">
          <h2>Recommendations</h2>
          <ul className="recommendation-list">
            <li>
              <blockquote>
                "Senna is an exceptional student with a natural aptitude for programming and problem solving."
                <br /><br />
                "Senna worked closely with me to design and refine programming assignments and lab documents, as well as review worksheets for the course. She was always reliable and efficient in her duties, and her attention to detail was superior."
                <br /><br />
                "Senna demonstrated outstanding leadership skills and a dedication to teaching. She effectively communicated technical material and provided helpful guidance."
              </blockquote>
              <p className="author">- Yipeng Song, Professor and Supervisor (songyip@oregonstate.edu)</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
            <h2>Contact</h2>
            <p>If you'd like to get in touch, please email me at sennatitcomb@gmail.com or connect with me on LinkedIn:
                <a href="https://www.linkedin.com/in/sennatitcomb/" target="_blank" rel="noreferrer">
                    <img src="linkedin-icon.png" alt="LinkedIn"/>
                </a>
            </p>
            <p>To download my Resume, please click here:</p>
            <a href="RESUME.pdf" download class="download-button">Download Resume</a>
        </div>
    </section>    

    <footer>
         <p onClick={scrollToTop}>&copy; 2023 Senna Titcomb</p>
    </footer>
    </>


          
  );
}

export default About;
