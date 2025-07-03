import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Home from './components/Home';

/**
 * Main App component
 * Handles routing and layout for the Student Management System
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/add-student" element={<StudentForm />} />
            <Route path="/edit-student/:id" element={<StudentForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
