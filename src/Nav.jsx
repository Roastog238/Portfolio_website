import { useState } from "react";
import "./Nav.css";
import logo from "./assets/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" >
            <img src={logo} alt="Roshan khanal logo" />
        </a>

        <div className="nav-links">
          <a href="./Body">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <a href="./Body">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;
