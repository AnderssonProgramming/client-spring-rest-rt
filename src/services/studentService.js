import api from './api';

/**
 * Service for managing student operations
 */
class StudentService {
  
  /**
   * Get all students
   * @returns {Promise} Promise resolving to list of students
   */
  async getAllStudents() {
    try {
      const response = await api.get('/students');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch students: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Create a new student
   * @param {Object} studentData - Student data
   * @returns {Promise} Promise resolving to created student
   */
  async createStudent(studentData) {
    try {
      const response = await api.post('/students', studentData);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create student: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Get student by ID
   * @param {string} id - Student ID
   * @returns {Promise} Promise resolving to student data
   */
  async getStudentById(id) {
    try {
      const response = await api.get(`/students/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch student: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Update student
   * @param {string} id - Student ID
   * @param {Object} studentData - Updated student data
   * @returns {Promise} Promise resolving to updated student
   */
  async updateStudent(id, studentData) {
    try {
      const response = await api.put(`/students/${id}`, studentData);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update student: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Delete student
   * @param {string} id - Student ID
   * @returns {Promise} Promise resolving to success message
   */
  async deleteStudent(id) {
    try {
      const response = await api.delete(`/students/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete student: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Search students by name
   * @param {string} name - Name to search for
   * @returns {Promise} Promise resolving to list of matching students
   */
  async searchStudentsByName(name) {
    try {
      const response = await api.get(`/students/search?name=${encodeURIComponent(name)}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search students: ${error.response?.data?.message || error.message}`);
    }
  }

  /**
   * Get students by program
   * @param {string} program - Program name
   * @returns {Promise} Promise resolving to list of students in program
   */
  async getStudentsByProgram(program) {
    try {
      const response = await api.get(`/students/program/${encodeURIComponent(program)}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch students by program: ${error.response?.data?.message || error.message}`);
    }
  }
}

const studentService = new StudentService();
export default studentService;
