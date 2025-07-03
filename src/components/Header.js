import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header component with navigation
 */
const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🎓 Student Management System</h1>
        </div>
        <nav className="navigation">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/students" 
            className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}
          >
            View Students
          </Link>
          <Link 
            to="/add-student" 
            className={`nav-link ${location.pathname === '/add-student' ? 'active' : ''}`}
          >
            Add Student
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
