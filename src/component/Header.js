import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="primary-header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="space tourism logo" />
      </div>

      {/* This line will be in between logo and navigation */}
      <div className="line"></div>

      <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? "" : "☰"}
      </button>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={handleMenuToggle}>
          X
        </button>
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={handleMenuToggle}>
              <span className="textbold">00</span>Home
            </Link>
          </li>
          <li>
            <Link to="/destination" onClick={handleMenuToggle}>
              <span className="textbold">01</span>Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" onClick={handleMenuToggle}>
              <span className="textbold">02</span>crew
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={handleMenuToggle}>
              <span className="textbold">03</span>technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
