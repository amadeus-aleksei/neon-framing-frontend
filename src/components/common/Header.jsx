import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <HashLink to="/">
        <div className="logo">Neon Framing</div>
      </HashLink>

      <nav className="nav">
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="nav-item" onClick={toggleMenu}>Services</Link>
          <Link to="/services/google-maps" className="nav-item" onClick={toggleMenu}>Google Maps</Link>
          <Link to="/collection" className="nav-item" onClick={toggleMenu}>Our Collection</Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
        </ul>
      </nav>

      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Header;