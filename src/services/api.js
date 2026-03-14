import axios from "axios";

const api = axios.create({
  baseURL: "https://yourdomain.com/api",
  withCredentials: true, // important for Laravel Sanctum
});

// Automatically attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
