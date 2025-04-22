import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>📝 Blog App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
