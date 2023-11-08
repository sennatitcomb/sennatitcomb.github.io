// About.js
import React from 'react';
import './index.css';

function Photos() {
  return (
    <>     
    <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/designs">Designs</a></li>
          </ul>
        </nav>
      </header>
      <section id="photography" class="section">
        <div className="container">
            <h2>Photography Gallery</h2>
            <div class="photo-gallery">
                <div class="photo">
                    <img src="photo1.png" alt="Flower"/>
                </div>
                <div class="photo">
                    <img src="photo2.png" alt="Ocean"/>
                </div>
                <div class="photo">
                    <img src="photo3.png" alt="Sunlight through Trees"/>  
                </div>
                <div class="photo">
                    <img src="photo4.png" alt="Concert"/>
                </div>   
                <div class="photo">
                    <img src="photo5.png" alt="Red and Purple Lights"/>
                </div> 
                <div class="photo">
                    <img src="photo6.png" alt="Flower"/>
                </div> 
                <div class="photo">
                    <img src="photo7.png" alt="French Graffiti"/>
                </div> 
                <div class="photo">
                    <img src="photo8.png" alt="Sky"/>
                </div> 
                <div class="photo">
                    <img src="photo9.png" alt="Flower" />
                </div> 
                <div class="photo">
                    <img src="photo10.png" alt="Flower"/>
                </div> 
                <div class="photo">
                    <img src="photo11.png" alt="CD Wall"/>
                </div> 
                <div class="photo">
                    <img src="photo12.png" alt="Flower"/>
                </div> 
        </div>
        </div>
    </section>
    
    </>


          
  );
}
export default Photos;

