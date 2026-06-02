import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink className="brand" to="/" onClick={closeMenu}>
        <span>AH</span>
        <div>
          <strong>Ahmed Hashim</strong>
          <small>Portfolio</small>
        </div>
      </NavLink>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>
          Let's Talk
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
