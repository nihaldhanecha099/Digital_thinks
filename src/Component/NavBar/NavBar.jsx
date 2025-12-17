import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Asse/LOGO-digital.webp";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav-container ${show ? "" : "hidden"}`}>
      <div className="nav-inner">
        <img src={logo} alt="logo" className="nav-logo" />

        {/* MENU ICON */}
        <div
          className={`menu-bar ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <div className="dropdown">
            <span className="dropdown-title">Services</span>
            <div className="dropdown-menu">
              <Link to="/digital-marketing">Digital Marketing</Link>
              <Link to="/website-designing">Website Designing</Link>
              <Link to="/graphic-designing">Graphic Designing</Link>
              <Link to="/appdevlopment">App Development</Link>
              <Link to="/seo">SEO</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdown-title">Training</span>
            <div className="dropdown-menu">
              <Link to="/fulldigitalmarketing">Full Digital Marketing</Link>
              <Link to="/becomewebdeveloper">Become Web Developer</Link>
              <Link to="/becomegraphicdesigner">Become Graphic Designer</Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
