import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function AppNavbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`glass-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
           RecipeExplorer
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="nav-menu" className="custom-toggle" />

        {/* Links */}
        <Navbar.Collapse id="nav-menu">
          <Nav className="ms-auto nav-links">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/recipes"
              className={location.pathname === "/recipes" ? "active-link" : ""}
            >
              Recipes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
