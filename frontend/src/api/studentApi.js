import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const addStudentApi = (studentData) => {
  return axios.post(`${API_URL}/students`, studentData);
};

export const getAllStudentsApi = () => {
  return axios.get(`${API_URL}/students`);
};

export const getStudentByIdApi = (id) => {
  return axios.get(`${API_URL}/students/${id}`); 
};
