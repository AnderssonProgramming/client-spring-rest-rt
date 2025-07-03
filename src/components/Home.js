import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home component - Landing page
 */
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Student Management System</h1>
          <p className="hero-description">
            A modern web application to manage student information with ease. 
            Register new students, view all registered students, and manage their information efficiently.
          </p>
          <div className="hero-actions">
            <Link to="/add-student" className="btn btn-primary">
              Add New Student
            </Link>
            <Link to="/students" className="btn btn-secondary">
              View All Students
            </Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Student Registration</h3>
              <p>Register new students with their personal information including name, email, birth date, and academic program.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Student Directory</h3>
              <p>View all registered students in a clean, organized table format with search and filter capabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Data Management</h3>
              <p>Edit and update student information or remove students from the system as needed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Cloud Storage</h3>
              <p>All data is securely stored in MongoDB cloud database ensuring reliability and accessibility.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <h2>Built with Modern Technology</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-name">React</span>
              <span className="tech-description">Frontend Framework</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Spring Boot</span>
              <span className="tech-description">Backend API</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">MongoDB</span>
              <span className="tech-description">Cloud Database</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">REST API</span>
              <span className="tech-description">Communication Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
