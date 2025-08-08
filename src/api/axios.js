import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL бэкенда из .env
  withCredentials: true // включаем передачу cookies
});

export default api;
