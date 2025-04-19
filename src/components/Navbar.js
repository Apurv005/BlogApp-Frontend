import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar__logo">
        <Link to="/">📝 BlogZone</Link>
      </div>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
