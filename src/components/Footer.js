import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <h3>RecipeExplorer</h3>
        <p>Discover and share amazing recipes.</p>
      </div>

      <div className="footer-right">
        <h4>Follow Us</h4>
        <div className="social-links">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} RecipeExplorer. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
