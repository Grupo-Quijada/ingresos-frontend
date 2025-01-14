import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json', // ver si lo cambiamos por el caso de envio de imagenes
  },
  timeout: 10000, // 5 segundos, tiempo máximo de espera para la respuesta,si anda lento cambiamos
});

// Interceptores de solicitud (reuqest)
axiosInstance.interceptors.request.use(
  (config) => {
    // Agregar lógica adicional, como un token de autenticación si es necesario (ACA MANEJAREMOS EL TOKEN)
    const token = localStorage.getItem('token'); // Ejemplo de token guardado en localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores de respuesta (response)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejar errores globales como autenticación, etc.
    if (error.response?.status === 401) {
      console.error('No autorizado, redirigiendo al login...');
      // Redirigir al usuario al login si es necesario
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;