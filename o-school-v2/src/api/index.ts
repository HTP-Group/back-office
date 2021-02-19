import axios, { AxiosRequestConfig } from 'axios';

const Axios = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/api',
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.method) {
    return config;
  }
  const method = config.method.toUpperCase();

  if (method !== 'OPTIONS') {
    config.headers = {
      ...config.headers,
      AUTHORIZATION: localStorage.getItem('JWT_ACCESS'),
    };
  }

  return config;
});

export default Axios;
