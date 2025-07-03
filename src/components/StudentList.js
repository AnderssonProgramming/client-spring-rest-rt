import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';
import './StudentList.css';

/**
 * StudentList component for displaying all students
 */
const StudentList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await studentService.getAllStudents();
      setStudents(response.data || []);
    } catch (error) {
      setError('Failed to load students: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      await studentService.deleteStudent(studentId);
      setStudents(students.filter(student => student.id !== studentId));
      setDeleteConfirm(null);
    } catch (error) {
      setError('Failed to delete student: ' + error.message);
    }
  };

  const confirmDelete = (student) => {
    setDeleteConfirm(student);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  // Filter students based on search term and selected program
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === '' || student.program === selectedProgram;
    return matchesSearch && matchesProgram;
  });

  // Get unique programs for filter dropdown
  const uniquePrograms = [...new Set(students.map(student => student.program))].sort();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  if (loading) {
    return (
      <div className="list-container">
        <div className="loading">Loading students...</div>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Student Directory</h2>
        <Link to="/add-student" className="btn btn-primary">
          Add New Student
        </Link>
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="program-filter">
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="filter-select"
          >
            <option value="">All Programs</option>
            {uniquePrograms.map(program => (
              <option key={program} value={program}>{program}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-info">
        <p>
          Showing {filteredStudents.length} of {students.length} students
          {searchTerm && <span> matching "{searchTerm}"</span>}
          {selectedProgram && <span> in {selectedProgram}</span>}
        </p>
      </div>

      {filteredStudents.length === 0 ? (
        <div className="no-students">
          {students.length === 0 ? (
            <div>
              <p>No students registered yet.</p>
              <Link to="/add-student" className="btn btn-primary">
                Add First Student
              </Link>
            </div>
          ) : (
            <p>No students match your search criteria.</p>
          )}
        </div>
      ) : (
        <div className="table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Birth Date</th>
                <th>Program</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td className="name-cell">
                    <div className="student-name">{student.name}</div>
                  </td>
                  <td className="email-cell">
                    <a href={`mailto:${student.email}`} className="email-link">
                      {student.email}
                    </a>
                  </td>
                  <td>{calculateAge(student.birthDate)} years</td>
                  <td>{formatDate(student.birthDate)}</td>
                  <td>
                    <span className="program-badge">{student.program}</span>
                  </td>
                  <td className="actions-cell">
                    <button
                      onClick={() => navigate(`/edit-student/${student.id}`)}
                      className="btn btn-small btn-secondary"
                      title="Edit student"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(student)}
                      className="btn btn-small btn-danger"
                      title="Delete student"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete <strong>{deleteConfirm.name}</strong>?
              This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button
                onClick={cancelDelete}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="btn btn-danger"
              >
                Delete Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
