import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <HashLink to="/">
        <div className="logo">Neon Framing</div>
      </HashLink>
  
      <nav className="nav">
        <ul>
          <Link to="/services" className="nav-item">Cyberservices</Link>
          <Link to="/portfolio" className="nav-item">Portfolio</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header