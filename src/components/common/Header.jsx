import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaCaretDown } from 'react-icons/fa';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesToggleRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (servicesDropdownOpen) {
      setServicesDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen((prev) => !prev);
  };

  // Handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        servicesToggleRef.current &&
        !servicesToggleRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        menuOpen &&
        !event.target.closest('.nav-menu') &&
        !event.target.closest('.hamburger')
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, servicesDropdownOpen]);

  return (
    <header className="header">
      <HashLink to="/">
        <div className="logo">Neon Framing</div>
      </HashLink>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <div className="dropdown" ref={servicesToggleRef}>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
          <FaCaretDown 
            className={`caret-icon ${servicesDropdownOpen ? 'rotate' : ''}`} 
            onClick={toggleServicesDropdown}
          />
          <div className='dropdown-menu' ref={servicesDropdownRef}>
            <Link to="/services/google-maps" className="dropdown-item" onClick={closeMenu}>Google Maps API Integration</Link>
            <Link to="/services/form-demo" className="dropdown-item" onClick={closeMenu}>Custom Form Demo</Link>
          </div>
        </div>
        <Link to="/websites" className="nav-link" onClick={toggleMenu}>Websites</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </nav>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Header;