import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

export const register = (data) => axios.post(`${API_URL}/register`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const verifyOtp = (data) => axios.post(`${API_URL}/verify-otp`, data);
