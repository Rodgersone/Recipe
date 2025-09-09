import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <section className="hero" data-aos="fade-up">
    <div className="hero-overlay">
      <div className="hero-content container">
        <h1>🍴 Welcome to <span>Recipe Explorer</span></h1>
        <p>
          Discover delicious recipes, explore ingredients, and make cooking fun again!
        </p>
        <Link to="/recipes" className="hero-btn">
          Explore Recipes →
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
