import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL бэкенда
  withCredentials: true,                 // важное: куки
});

export default api;
