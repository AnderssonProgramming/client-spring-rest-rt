import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import studentService from '../services/studentService';
import './StudentForm.css';

/**
 * StudentForm component for creating and editing students
 */
const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  // Load student data if editing
  useEffect(() => {
    const loadStudentData = async () => {
      try {
        setLoading(true);
        const response = await studentService.getStudentById(id);
        const student = response.data;
        
        // Set form values
        setValue('name', student.name);
        setValue('email', student.email);
        setValue('birthDate', student.birthDate);
        setValue('program', student.program);
      } catch (error) {
        setSubmitError('Failed to load student data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (isEditing) {
      loadStudentData();
    }
  }, [id, isEditing, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setSubmitError('');
      setSubmitSuccess('');

      if (isEditing) {
        await studentService.updateStudent(id, data);
        setSubmitSuccess('Student updated successfully!');
      } else {
        await studentService.createStudent(data);
        setSubmitSuccess('Student created successfully!');
        reset(); // Clear form for new entry
      }

      // Redirect after success
      setTimeout(() => {
        navigate('/students');
      }, 2000);

    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return (
      <div className="form-container">
        <div className="loading">Loading student data...</div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>{isEditing ? 'Edit Student' : 'Add New Student'}</h2>
        
        {submitError && (
          <div className="alert alert-error">
            {submitError}
          </div>
        )}
        
        {submitSuccess && (
          <div className="alert alert-success">
            {submitSuccess}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="student-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
              className={errors.name ? 'error' : ''}
              placeholder="Enter student's full name"
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={errors.email ? 'error' : ''}
              placeholder="Enter email address"
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth *</label>
            <input
              type="date"
              id="birthDate"
              {...register('birthDate', {
                required: 'Birth date is required',
                validate: {
                  pastDate: (value) => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    return birthDate < today || 'Birth date must be in the past';
                  },
                  validAge: (value) => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    const age = today.getFullYear() - birthDate.getFullYear();
                    return (age >= 16 && age <= 100) || 'Student must be between 16 and 100 years old';
                  }
                }
              })}
              className={errors.birthDate ? 'error' : ''}
            />
            {errors.birthDate && <span className="error-message">{errors.birthDate.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="program">Academic Program *</label>
            <select
              id="program"
              {...register('program', {
                required: 'Program is required'
              })}
              className={errors.program ? 'error' : ''}
            >
              <option value="">Select a program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Game Development">Game Development</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            {errors.program && <span className="error-message">{errors.program.message}</span>}
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/students')}
              className="btn btn-secondary"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {(() => {
                if (loading) return 'Saving...';
                return isEditing ? 'Update Student' : 'Create Student';
              })()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
