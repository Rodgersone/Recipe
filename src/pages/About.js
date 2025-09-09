import React from "react";
import "./About.css";

const About = () => (
  <section className="about-section">
    <div className="about-overlay">
      <div className="container about-container row align-items-center">
        
        {/* Text section */}
        <div className="col-md-6 about-text">
          <h1>About <span>Recipe Explorer</span></h1>
          <p>
            Recipe Explorer is more than just a recipe app—it’s a modern web
            experience designed to make cooking fun, interactive, and
            accessible. Browse recipes, discover ingredients, and spark your
            creativity in the kitchen.
          </p>
          <ul>
            <li> Built with React.js</li>
            <li> Responsive with Bootstrap</li>
            <li> Smooth design and transitions</li>
            <li> Dynamic recipe browsing</li>
          </ul>
        </div>

        {/* Image section */}
        <div className="col-md-6 text-center about-img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Chef cooking"
            className="about-img"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
