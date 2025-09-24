import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>CyberSecurity Awards 2025</h1>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#awards" className="nav-link">Awards</a>
          <a href="#nominees" className="nav-link">Nominees</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
