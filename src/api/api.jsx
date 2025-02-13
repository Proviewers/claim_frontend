import axios from 'axios';

const api = axios.create({
  baseURL: 'https://claim-backend-dte3.onrender.com/api',
  withCredentials: true,
});

// Attach token from localStorage to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('Attaching token:', token);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
